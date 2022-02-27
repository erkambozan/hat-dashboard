import axios from "axios";

let base = "/hat";

class EarnApi {

    static FindEarnsByUserId = () => {
        return axios.get(`${base}/earnwithdrawrequests`, this.getToken());
    }

    static CreateEarnWithdraw = (data) => {
        return axios.post(`${base}/withdrawearn/`, data, this.getToken())
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