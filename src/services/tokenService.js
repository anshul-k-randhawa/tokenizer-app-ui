import { API_URL } from "../constants/config";
import { query } from "./utilities";

export const generateToken = () => query(`${API_URL}/token/generate`);

export const getTokenList = (start, end) =>
  query(`${API_URL}/token/list?start=` + start + "&end=" + end);

export const validateToken = (key) =>
  query(`${API_URL}/token/validate?key=` + key);
