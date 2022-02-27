import axios from "axios";

let base = "/hat";
let baseAdmin = "/hat/admin"

class EarnApi {

    static FindEarnsByUserId = () => {
        return axios.get(`${base}/earnwithdrawrequests/`, this.getToken());
    }

    static CreateEarnWithdraw = (data) => {
        return axios.post(`${base}/withdrawearn/`, data, this.getToken())
    }

    static DeleteEarnById = (id) => {
        return axios.delete(`${base}/earnwithdraw/${id}`, this.getToken())
    }

    static UpdateEarnWithdraw = (id, data) => {
        return axios.put(`${baseAdmin}/earnwithdraw/${id}`, data, this.getToken())
    }

    static getToken = () => {
        return {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }
    }
}


export default EarnApi;