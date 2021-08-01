import { authConstants } from "../constants/actionTypes";
import * as authService from "../services/authenticationService";

const requestLogin = () => ({
  type: authConstants.LOGIN_REQUEST,
});

const receiveLoginSuccess = (data) => ({
  type: authConstants.LOGIN_SUCCESS,
  data,
});

const receiveLoginError = (errorMessage) => ({
  type: authConstants.LOGIN_ERROR,
  errorMessage,
});

export function logout() {
  authService.logout();
  return { type: authConstants.LOGOUT };
}

export function AuthenticateCustomerLogin(email, password, history) {
  return (dispatch) => {
    debugger;
    dispatch(requestLogin());
    return authService.AuthenticateCustomerLogin(email, password).then(
      (data) => {
        dispatch(receiveLoginSuccess(data));
        history.push("/home");
      },
      (error) => {
        dispatch(receiveLoginError(error));
      }
    );
  };
}
