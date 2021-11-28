import axios from "./index";

class AuthApi {
  static Login = (data) => {
    return axios.post(`${base}/authenticate`, data);
  };

  static Register = (data) => {
    return axios.post(`${base}/register`, data);
  };

  static Logout = (data) => {
    return axios.post(`${base}/logout`, data, { headers: { Authorization: `${data.token}` } } );
  };
}

let base = "/hat";

export default AuthApi;
