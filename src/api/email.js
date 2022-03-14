import axios from "axios";

let base = "/hat/email"

class EmailApi {
    static CreateVerificationCode = () => {
        return axios.get(`${base}/sendcode`, this.getToken())
    }

    static SendCodeNotLogged = (data) => {
        return axios.post(`${base}/sendcodenotloggeduser`, data)
    }

    static VerifyCode = (data) => {
        return axios.post(`${base}/verifycode`, data, this.getToken())
    }

    static VerifyCodeNotLogged = (data) => {
        return axios.post(`${base}/verifycodenotlogged`, data)
    }

    static getToken = () => {
        return {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }
    }
}


export default EmailApi;