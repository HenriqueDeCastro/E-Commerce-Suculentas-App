import { IUser } from "./iuser";

export interface IRoleByUser {
  roleName: string;
  users: IUser[];
}
