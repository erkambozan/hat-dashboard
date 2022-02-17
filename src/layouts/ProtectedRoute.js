import React from "react";
import { Route } from "react-router-dom";
import { useAuth } from "auth-context/auth.context";
import { useHistory } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";
import Redirect from "react-router-dom/es/Redirect";

export const ProtectedRoute = ({ ...rest }) => {
  const history = useHistory();
  let { user } = useAuth();
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
