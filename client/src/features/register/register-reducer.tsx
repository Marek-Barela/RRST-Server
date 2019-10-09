import { registerUserRequest } from "./register-actions";
import { getType } from "typesafe-actions";
import { initialUserState } from "../__initialStates__/userInitialState";
import { RootAction } from "../../redux/root-actions";
import { User } from "../__interfaces__/userInterface";

export default function( state: User = initialUserState, action: RootAction ): User {
  switch (action.type) {
    case getType(registerUserRequest.request): {
      return {
        ...state,
        isFetching: true
      };
    }
    case getType(registerUserRequest.success): {
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isFetching: false
      };
    }
    case getType(registerUserRequest.failure): {
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isFetching: false,
        user: { _id: null }
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
