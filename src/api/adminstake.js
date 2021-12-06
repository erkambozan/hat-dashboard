import axios from "axios";

let base = "/hat";
class AdminStakeApi {


  static GetAllStakes = ()=>{
    return axios.get(`${base}/admin/stakes`,this.getToken())
  }

  static getToken = ()=>{
    return {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }
  }
}



export default  AdminStakeApi;