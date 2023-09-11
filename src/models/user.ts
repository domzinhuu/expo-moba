export type Address = {
  city: string;
  district: string;
  info: string;
  number: string;
  state: string;
  street: string;
  zipcode: string;
};

export type CreateUserCompanyData = {
  doc: string;
  companyName: string;
  ecAddress: Address;
  phone: string;
  revenue: string;
};

export type CreateUserRepresentativeData = {
  doc: string;
  email: string;
  phone: string;
  name: string;
};

export type CreateUserAccessData = {
  email_login: string;
  password: string;
};

export type MachineData = {
  acqDoc: string;
  acqName: string;
  ecDoc: string;
  ecName: string;
};

export type CreateUserAcquirerData = {
  added: Record<string, MachineData[]>;
};
