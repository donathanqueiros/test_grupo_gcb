export interface IAddress {
  number: string;
  street: string;
  complement: string;
  zipCode: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface IUser {
  name: string;
  birthDate: string;
  cpf: string;
  address: IAddress;
}
