import { UserResponse } from "../__commonModels__/userModel";
import axios from "axios";

export const getUserFromDatabase = async (): Promise<UserResponse> => {
  return await axios("/api/auth").then(res => res.data);
};
