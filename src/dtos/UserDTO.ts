import { MachineData } from "../models/user";

export type UserDto = {
  currentClient: {
    clientId: number;
    email_login: string;
    email_rep: string;
    cnpj: string;
    ecPhone: string;
    clientPhone: string;
    reprName: string;
    reprDoc: string;
    companyName: string;
    ecAddress: {
      street: string;
      number: string;
      zipcode: string;
      district: string;
      city: string;
      state: string;
      info: string;
    };
    combo: {
      active: Record<string, MachineData[]>;
    };
  };
};
