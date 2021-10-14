import { IUserRole } from "./iuser-role";

export interface IRole {
  id?: number;
  name: string;
  userRoles?: IUserRole[];
}
