import axios from "axios";

let baseUrl = "/hat/admin";
class AdminStakeApi {
  static GetAllWithdraw = ()=>{
    return axios.get(`${baseUrl}/withdraw`,this.getToken())
  }
  static GetAllStakes = ()=>{
    return axios.get(`${baseUrl}/stakes`,this.getToken())
  }
  static UpdateStakeType = (id,data)=>{
    return axios.put(`${baseUrl}/settings/${id}`,data,this.getToken())
  }
  static CreateStakeType = (data)=>{
    return axios.post(`${baseUrl}/settings`,data,this.getToken())
  }
  static UpdateWithdraw = (id, data) => {
    return axios.put(`${baseUrl}/withdraw/${id}`, data, this.getToken())
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