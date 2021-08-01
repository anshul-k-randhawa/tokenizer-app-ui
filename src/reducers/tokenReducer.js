import { tokenConstants } from "../constants/actionTypes";

const initialState = {
  tokens: [],
  isFetching: false,
  tokenGenerated: null,
  isTokenValid: false,
  errorMessage: null,
};

export function tokenReducer(state = initialState, action) {
  switch (action.type) {
    case tokenConstants.GET_TOKENS_INPROGRESS:
      return {
        ...state,
        isFetching: true,
      };
    case tokenConstants.GET_TOKENS_SUCCESS:
      return {
        tokens: action.tokens,
        isFetching: false,
      };
    case tokenConstants.GET_TOKENS_ERROR:
      return {
        tokens: [],
        isFetching: false,
        errorMessage: action.errorMessage,
      };
    case tokenConstants.GENERATE_TOKEN_INPROGRESS:
      return {
        ...state,
        isFetching: true,
      };
    case tokenConstants.GENERATE_TOKEN_SUCCESS:
      return {
        tokenGenerated: action.token,
        isFetching: false,
      };
    case tokenConstants.GENERATE_TOKEN_ERROR:
      return {
        tokenGenerated: null,
        isFetching: false,
        errorMessage: action.errorMessage,
      };
    case tokenConstants.VALIDATE_TOKEN_INPROGRESS:
      return {
        ...state,
        isFetching: true,
      };
    case tokenConstants.VALIDATE_TOKEN_SUCCESS:
      return {
        isTokenValid: action.isTokenValid,
        isFetching: false,
      };
    case tokenConstants.VALIDATE_TOKEN_ERROR:
      return {
        isTokenValid: false,
        isFetching: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
}
