import axios from "axios";

let base = "/hat"

class UserApi {

    static GetAllWithdrawUser = () => {
        return axios.get(`${base}/withdraw`, this.getToken());
    };

    static CreateWithdraw = (data) => {
        return axios.post(`${base}/withdraw`, data, this.getToken())
    }

    static GetTotalBalance = () => {
        return axios.get(`${base}/totalbalance`, this.getToken());
    };

    static GetUserDetails = () => {
        return axios.get(`${base}/det`, this.getToken());
    };

    static GetTransactions = (userId) => {
        return axios.get(`${base}/transactions/${userId}`, this.getToken());
    };

    static getToken = () => {
        return {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }
    }
}


export default UserApi;