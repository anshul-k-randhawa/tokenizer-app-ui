import { tokenConstants } from "../constants/actionTypes";
import * as tokensService from "../services/tokenService";

export const getTokensRequest = () => ({
  type: tokenConstants.GET_TOKENS_INPROGRESS,
});

export const generateTokenRequest = () => ({
  type: tokenConstants.GENERATE_TOKEN_INPROGRESS,
});

export const validateTokenRequest = () => ({
  type: tokenConstants.VALIDATE_TOKEN_INPROGRESS,
});

export const getTokensSuccess = (data) => ({
  type: tokenConstants.GET_TOKENS_SUCCESS,
  tokens: data,
});

export const generateTokenSuccess = (data) => ({
  type: tokenConstants.GENERATE_TOKEN_SUCCESS,
  token: data,
});

export const validateTokenSuccess = (data) => ({
  type: tokenConstants.VALIDATE_TOKEN_SUCCESS,
  isTokenValid: data
});

export const getTokensError = (errorMessage) => ({
  type: tokenConstants.GET_TOKENS_ERROR,
  errorMessage,
});

export const generateTokenError = (errorMessage) => ({
  type: tokenConstants.GENERATE_TOKEN_ERROR,
  errorMessage,
});

export const validateTokenError = (errorMessage) => ({
  type: tokenConstants.VALIDATE_TOKEN_ERROR,
  errorMessage,
});

export function getTokens(start, end) {
  return (dispatch) => {
    dispatch(getTokensRequest());
    return tokensService.getTokenList(start, end).then(
      (data) => {
        dispatch(getTokensSuccess(data));
      },
      (error) => {
        dispatch(getTokensError(error));
      }
    );
  };
}

export function generateToken() {
  return (dispatch) => {
    dispatch(generateTokenRequest());
    return tokensService.generateToken().then(
      (data) => {
        debugger;
        dispatch(generateTokenSuccess(data));
      },
      (error) => {
        debugger;
        dispatch(generateTokenError(error));
      }
    );
  };
}

export function validateToken(key) {
  return (dispatch) => {
    dispatch(validateTokenRequest());
    return tokensService.validateToken(key).then(
      (data) => {
        dispatch(validateTokenSuccess(data));
      },
      (error) => {
        dispatch(validateTokenError(error));
      }
    );
  };
}
