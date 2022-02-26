import React from "react";
import { Route } from "react-router-dom";
import { useAuth } from "auth-context/auth.context";
import { useHistory } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";
import Redirect from "react-router-dom/es/Redirect";
import jwt_decode from "jwt-decode";

export const ProtectedRoute = ({ ...rest }) => {
  const history = useHistory();
  let { user } = useAuth();
  const USER_OBJ= "user"
  let user2 = JSON.parse(localStorage.getItem(USER_OBJ));
  if (user2 != null && user2.token != null &&  typeof user2.token !== 'undefined'){
    let token =  jwt_decode(user.token);
    if (token.exp * 1000 < Date.now()) {
      localStorage.clear();
      window.location.href="./error-403"
    }
  }
  if (!user || !user.token || user.token === "") {
    return (
        <Redirect to="/auth/signin" />
      /*<SweetAlert
        title="You must be signed in!"
        onCancel={() => history.push("/auth/signin")}
        onConfirm={() => history.push("/auth/signin")}
        confirmBtnCssClass={"px-5"}
      />*/
    );
  }

  return <Route {...rest} />;
};
