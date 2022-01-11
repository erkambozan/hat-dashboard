/*
import React from "react";
import jwt_decode from "jwt-decode";

export default class ControlToken extends React.Component {

    tokenControl(){
        const USER_OBJ= "user"
        let user = JSON.parse(localStorage.getItem(USER_OBJ));
        if (user != null && user.token != null &&  typeof user.token !== 'undefined'){
            let token =  jwt_decode(user.token);
            if (token.exp * 1 < Date.now()) {
                localStorage.clear();
                window.location.href="./error-403"
            }
        }
    }
    render() {
        return (
            <div>
                {this.tokenControl()}
            </div>
        );
    }
} */
