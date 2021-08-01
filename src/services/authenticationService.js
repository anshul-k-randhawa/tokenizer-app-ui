import { query, saveUser } from "./utilities";
import { API_URL } from "../constants/config";

export const getUser = () =>
  typeof window !== "undefined" &&
  window.sessionStorage &&
  window.sessionStorage.getItem("tokenAppUser")
    ? JSON.parse(window.sessionStorage.getItem("tokenAppUser"))
    : {};

export const isLoggedIn = () => {
  //return true;
  const user = getUser();
  return !!user.token;
};

export const logout = () => {
  sessionStorage.removeItem("tokenAppUser");
};

export const AuthenticateCustomerLogin = (email, password) =>
  query(`${API_URL}/Auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then((user) => {
    if (user.token) {
      const result = {
        token: user.token,
        expiresIn: user.expiresIn,
      };
      saveUser(result);
      return result;
    } else {
      return Promise.reject("bad response token");
    }
  });
