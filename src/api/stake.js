import axios from "axios";

let base = "/hat/stake";
class StakeApi {
   static GetAllStakeSettings = () => {
    return axios.get(`${base}/settings`,this.getToken());
  };

  static FindStakesByUserId = ()=>{
    return axios.get(`${base}/`,this.getToken());
  }

  static MakeStake = (data) => {
      return axios.post(`${base}`,data,this.getToken())
  }

  static getToken = ()=>{
    return {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }
  }
}



export default  StakeApi;