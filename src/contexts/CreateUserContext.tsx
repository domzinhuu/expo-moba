import React, { PropsWithChildren, createContext, useState } from "react"
import {
  CreateUserAccessData,
  CreateUserAcquirerData,
  CreateUserCompanyData,
  CreateUserRepresentativeData,
  MachineData,
} from "@models/user"
import { Control, UseFormGetValues, useForm } from "react-hook-form"

interface CreateUserContextProps {
  companyData: CreateUserCompanyData
  representativeData: CreateUserRepresentativeData
  accessData: CreateUserAccessData
  combo: CreateUserAcquirerData
  imageForValidation: any
  control: Control<FormDataProps>
  handleSubmit: any
  getValues: UseFormGetValues<FormDataProps>
  onSetCompanyData: (data: CreateUserCompanyData) => void
  onSetRepresentativeData: (data: CreateUserRepresentativeData) => void
  onSetAccessData: (data: CreateUserAccessData) => void
  onSetComboData: (data: MachineData) => void
  onDeleteAcquirer: (key: string, acqDoc: string) => void
  execMockStep1: () => void
  onClear: () => void
  onSetImageUpload: (image: any, position: "front" | "back") => void
}

export const CreateUserContext = createContext({} as CreateUserContextProps)

export function CreateUserProvider({ children }: PropsWithChildren) {
  const { control, setValue, getValues, handleSubmit, reset, clearErrors } =
    useForm<FormDataProps>()

  const [companyData, setCompanyData] = useState<CreateUserCompanyData>({
    ecAddress: {},
  } as CreateUserCompanyData)

  const [reprData, setReprData] = useState<CreateUserRepresentativeData>(
    {} as CreateUserRepresentativeData
  )
  const [accessData, setAccessData] = useState<CreateUserAccessData>(
    {} as CreateUserAccessData
  )
  const [combo, setCombo] = useState<CreateUserAcquirerData>({
    added: {},
  } as CreateUserAcquirerData)

  const [imageForValidation, setImageForValidation] = useState<any>({})

  function handleSetCompanyData(data: CreateUserCompanyData) {
    setCompanyData(data)
  }
  function handleSetReprData(data: CreateUserRepresentativeData) {
    setReprData(data)
  }
  function handleSetAccessData(data: CreateUserAccessData) {
    setAccessData(data)
  }

  function handleSetCombo(data: MachineData) {
    setCombo((state) => {
      const newValue = state
      const key = data.ecDoc.replace(/\D/g, "")
      if (newValue.added[key]) {
        newValue.added[key] = [...newValue.added[key], data]
      } else {
        newValue.added[key] = [data]
      }
      return newValue
    })
  }

  function handleDeleteAcquirer(key: string, acqDoc: string) {
    setCombo((state) => {
      const newValue = { ...state }

      newValue.added[key] = state.added[key].filter(
        (item) => item.acqDoc !== acqDoc
      )

      return newValue
    })
  }

  function handleSetImageUpload(image: any, position: "front" | "back") {
    setImageForValidation((prev: any) => {
      const newValue = { ...prev }
      newValue[position] = image
      return newValue
    })
  }

  function clearAll() {
    clearErrors()
    reset()
  }

  function mockFirstStep() {
    setValue("doc", "46851490000130", { shouldValidate: true })
    setValue("city", "Sao Goncalo", { shouldValidate: true })
    setValue("companyName", "MSR Software", { shouldValidate: true })
    setValue("district", "Vista Alegre", { shouldValidate: true })
    setValue("email", "maique.rosa@gmail.com", { shouldValidate: true })
    setValue("representativeDoc", "11564763722", { shouldValidate: true })
    setValue("representativePhone", "21988152861", { shouldValidate: true })
    setValue("name", "Maique Rosa", { shouldValidate: true })
    setValue("info", "BL 11", { shouldValidate: true })
    setValue("number", "115", { shouldValidate: true })
    setValue("phone", "21988152861", { shouldValidate: true })
    setValue("street", "Strada Sao Pedro", { shouldValidate: true })
    setValue("state", "RJ", { shouldValidate: true })
    setValue("zipcode", "24725270", { shouldValidate: true })
    setValue("password", "Kayrossxp529@", { shouldValidate: true })
    setValue("email_login", "maique.rosa@gmail.com", { shouldValidate: true })
    setValue("revenue", "R$ 20.000,00 a R$ 100.000,00", {
      shouldValidate: true,
    })
  }

  return (
    <CreateUserContext.Provider
      value={{
        representativeData: reprData,
        companyData,
        accessData,
        imageForValidation,
        combo,
        control,
        execMockStep1: mockFirstStep,
        getValues,
        handleSubmit,
        onClear: clearAll,
        onDeleteAcquirer: handleDeleteAcquirer,
        onSetCompanyData: handleSetCompanyData,
        onSetComboData: handleSetCombo,
        onSetRepresentativeData: handleSetReprData,
        onSetAccessData: handleSetAccessData,
        onSetImageUpload: handleSetImageUpload,
      }}
    >
      {children}
    </CreateUserContext.Provider>
  )
}

type FormDataProps = {
  city: string
  district: string
  info: string
  number: string
  state: string
  street: string
  zipcode: string
  doc: string
  companyName: string
  phone: string
  revenue: string
  representativeDoc: string
  email: string
  representativePhone: string
  name: string
  email_login: string
  password: string
  passwordConfirm: string
}
