import axios from "axios";

let base = "/hat";
class AdminStakeApi {


  static GetAllStakes = ()=>{
    return axios.get(`${base}/admin/stakes`,this.getToken())
  }
  static UpdateStakeType = (id,data)=>{
    return axios.put(`${base}/admin/settings/${id}`,data,this.getToken())
  }
  static CreateStakeType = (data)=>{
    return axios.post(`${base}/admin/settings`,data,this.getToken())
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