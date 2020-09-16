import { IVenda } from './IVenda';
import { IEndereco } from './IEndereco';
import { IUserRole } from './IUserRole';

export interface IUser {

  fullName: string;
  password: string;
  cpf: string;
  dataNascimento: string;
  phoneNumber: string;
  email: string;
  confirmedPassword: string;
  vendas?: IVenda[];
  enderecos?: IEndereco[];
  userRoles?: IUserRole[];
}
