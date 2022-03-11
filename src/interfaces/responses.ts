import { User } from ".";

export interface loginResponse {
  user: User,
  token: string,
}