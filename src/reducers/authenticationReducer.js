import { authConstants } from "../constants/actionTypes"
import { getUser } from "../services/authenticationService"

let user = getUser()

let initialState = !!user.token
  ? { isAuthenticated: true, ...user }
  : { isAuthenticated: false }
initialState = { ...initialState, isProcessing: false }

export function authentication(state = initialState, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        ...state,
        isProcessing: true,
        isAuthenticated: false,
      }
    case authConstants.LOGIN_SUCCESS:
      return {
        isProcessing: false,
        isAuthenticated: true,
        ...action.data
      }
    case authConstants.LOGIN_ERROR:
      return {
        isProcessing: false,
        isAuthenticated: false,
        errorMessage: action.errorMessage,
      }
    case authConstants.LOGOUT:
      return {
        isProcessing: false,
        isAuthenticated: false
      }
    default:
      return state
  }
}

