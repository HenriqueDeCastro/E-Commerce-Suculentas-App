import { IUserRole } from './IUserRole';

export interface IRole {

  id?: number;
  name: string;
  userRoles?: IUserRole[];
}
