import {
  Address,
  CreateUserAcquirerData,
  CreateUserRepresentativeData,
} from "./user"

export type CreateUserEntity = {
  ec: {
    combo: CreateUserAcquirerData
    companyName: string
    doc: string
    ecAddress: Address
    phone: string
    representative: CreateUserRepresentativeData
    revenue: string
  }
  user?: {
    email_login: string
    password: string
  }
}
