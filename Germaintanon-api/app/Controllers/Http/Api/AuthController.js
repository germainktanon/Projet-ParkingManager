const Hash = use('Hash');
const { validate, validateAll } = use('Validator');
const Encryption = use('Encryption');
const User = use('App/Models/User');
const Token = use('App/Models/Token');

class AuthController {
  async signIn({ request, response, auth }) {
    const rules = {
      email: 'required|email',
      password: 'required'
    };

    const { email, password } = request.only(['email', 'password']);

    const validation = await validateAll({ email, password }, rules);

    if (!validation.fails()) {
      try {
        return await auth.withRefreshToken().attempt(email, password);
      } catch (err) {
        response.status(400).send({ error: 'Aucun utilisateur trouvé avc ces informations' });
      }
    } else {

      response.status(400).send({
        fields: validation.messages()
      });
    }
  }

  async register({ request, response, auth }) {
    const rules = {
      email: 'required|email|unique:users,email',
      noms: 'required',
      password: 'required'
    };

    const { email, noms, password } = request.only([
      'email',
      'noms',
      'password'
    ]);

    const validation = await validateAll({ email, noms, password }, rules);

    if (!validation.fails()) {
      try {
        const user = await User.create({ email, noms, password });
        return await auth.withRefreshToken().attempt(email, password);
      } catch (err) {
        response.status(400).send({ error: 'Please try again', message: err.message });
      }
    } else {
      response.status(400).send(validation.messages());
    }
  }

  async refreshToken({ request, response, auth }) {
    const rules = {
      refresh_token: 'required'
    };

    const { refresh_token } = request.only(['refresh_token']);

    const validation = await validate({ refresh_token }, rules);

    if (!validation.fails()) {
      try {
        return await auth
          .newRefreshToken()
          .generateForRefreshToken(refresh_token);
      } catch (err) {
        response.status(401).send({ error: 'Invalid refresh token' });
      }
    } else {
      response.status(401).send(validation.messages());
    }
  }

  async logout({ request, response, auth }) {
    const rules = {
      refresh_token: 'required'
    };

    const { refresh_token } = request.only(['refresh_token']);

    const validation = await validate({ refresh_token }, rules);

    const decrypted = Encryption.decrypt(refresh_token);

    if (!validation.fails()) {
      try {
        const refreshToken = await Token.findBy('token', decrypted);
        if (refreshToken) {
          refreshToken.delete();
          response.status(200).send({ status: 'ok' });
        } else {
          response.status(401).send({ error: 'Invalid refresh token' });
        }
      } catch (err) {
        response.status(401).send({ error: 'something went wrong' });
      }
    } else {
      response.status(401).send(validation.messages());
    }
  }
}

module.exports = AuthController;
