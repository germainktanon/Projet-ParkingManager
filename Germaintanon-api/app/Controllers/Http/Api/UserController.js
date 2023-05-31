class UserController {
  async getUser({ response, auth }) {
    try {
      const { email, noms, mobile, id } = await auth.getUser();
      return { email, noms, mobile, id };
    } catch (error) {
      response.send('Missing or invalid jwt token');
    }
  }
}
module.exports = UserController;
