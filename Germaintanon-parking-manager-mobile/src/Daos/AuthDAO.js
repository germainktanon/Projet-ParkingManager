import {ME, REGISTER, LOGIN} from '../api/routes';
import axios from 'axios';

export default class AuthDAO {
  constructor() {
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  async register({email, password, noms, prenoms}) {
    const tokenResponse = (
      await axios.post(REGISTER, {
        email: email.trim(),
        password,
        noms,
      })
    ).data;

    const user = await this.getUserInfo(tokenResponse.token);

    return {
      token: tokenResponse,
      user: user,
    };
  }

  async login({email, password}) {
    const tokenResponse = (
      await axios.post(LOGIN, {
        email: email.trim(),
        password,
      })
    ).data;

    const user = await this.getUserInfo(tokenResponse.token);

    return {
      token: tokenResponse,
      user: user,
    };
  }

  async getUserInfo(token) {
    const response = (
      await axios.get(ME, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    );


      return response.data;
  }
}
