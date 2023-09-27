import { CreateUserAcquirerData, MachineData } from "../models/user";

export type UserDto = {
  clientId: number;
  email_login: string;
  email_rep: string;
  cnpj: string;
  ecPhone: string;
  clientPhone: string;
  reprName: string;
  reprDoc: string;
  companyName: string;
  revenue: string;
  ecAddress: {
    street: string;
    number: string;
    zipcode: string;
    district: string;
    city: string;
    state: string;
    info: string;
  };
  combo: CreateUserAcquirerData;
};
