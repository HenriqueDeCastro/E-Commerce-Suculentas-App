import { IAddress } from "./iaddress";
import { IUserRole } from "./iuser-role";
import { ISale } from "./isale";

export interface IUser {
  id?: number
  fullName?: string;
  password?: string;
  cpf?: string;
  acceptTerms?: boolean;
  birthDate?: string;
  phoneNumber?: string;
  email?: string;
  confirmedPassword?: string;
  role?: string[];
  vendas?: ISale[];
  enderecos?: IAddress[];
  userRoles?: IUserRole[];
}
