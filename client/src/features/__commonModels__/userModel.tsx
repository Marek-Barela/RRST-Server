export type User = {
  token?: string | null;
  isAuthenticated?: boolean | null;
  isFetching?: boolean;
  user?: UserResponse;
};

export interface UserResponse {
  date?: Date;
  _id?: string | null;
  name?: string;
  email?: string;
}
