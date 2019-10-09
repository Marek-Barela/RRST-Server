import { RootAction } from "../../redux/root-actions";
import { fetchUserRequest } from "./authorization-actions";
import { getType } from "typesafe-actions";
import { UserResponse } from "./authorization-model";

export type AuthorizationState = {
  token: string | null;
  isAuthenticated: boolean | null;
  isFetching: boolean;
  user: UserResponse;
};

export const initialState: AuthorizationState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isFetching: true,
  user: { _id: "" }
};

export default function(
  state: AuthorizationState = initialState,
  action: RootAction
): AuthorizationState {
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
    case REGISTER_SUCCESS: {
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    }
    case LOGIN_FAIL:
    case REGISTER_FAIL:
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
