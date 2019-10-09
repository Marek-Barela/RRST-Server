import { RootAction } from "../../redux/root-actions";
import { fetchUserRequest } from "./authorization-actions";
import { getType } from "typesafe-actions";
import { initialUserState } from "../__initialStates__/userInitialState";
import { User } from "../__interfaces__/userInterface";

export default function(
  state: User = initialUserState,
  action: RootAction
): User {
  switch (action.type) {
    case getType(fetchUserRequest.request): {
      return {
        ...state,
        isFetching: true
      };
    }
    case getType(fetchUserRequest.success): {
      return {
        ...state,
        isAuthenticated: true,
        isFetching: false,
        user: action.payload
      };
    }
    case getType(fetchUserRequest.failure): {
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isFetching: false,
        user: { _id: null }
      };
    }

    /** 
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS "ok": {
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    }
    case LOGIN_FAIL:
    case REGISTER_FAIL "ok":
    case AUTH_ERROR "OK":
    case LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: { _id: null }
      };
    }
    */
    default: {
      return {
        ...state
      };
    }
  }
}
