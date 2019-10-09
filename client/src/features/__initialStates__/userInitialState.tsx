import { User } from "../__interfaces__/userInterface";

export const initialUserState: User = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isFetching: true,
  user: { _id: "" }
};
