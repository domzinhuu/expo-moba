import { PropsWithChildren, createContext, useContext, useState } from "react"
import { CreateUserContext } from "./CreateUserContext"
import { useCustomToast } from "@hooks/useCustomToast"
import {
  Address,
  CreateUserCompanyData,
  CreateUserRepresentativeData,
} from "@models/user"

interface StepperContextProps {
  currentStep: number
  setStep: (value: number) => void
  nextStep: (data: any) => void
  prevStep: () => void
}

export const stepperContext = createContext({} as StepperContextProps)

export function StepperProvider({ children }: PropsWithChildren) {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const {
    companyData,
    combo,
    onSetCompanyData,
    onSetRepresentativeData,
    onSetAccessData,
    imageForValidation,
  } = useContext(CreateUserContext)

  const toast = useCustomToast()

  function handleNextStep(data: any) {
    let isValid = true
    let errorMessage = ""

    if (currentStep === 1) {
      const {
        companyName,
        doc,
        phone,
        revenue,
        city,
        district,
        info,
        number,
        state,
        street,
        zipcode,
      } = data

      const companyData: CreateUserCompanyData = {
        companyName,
        doc,
        phone,
        revenue,
        ecAddress: {
          city,
          district,
          info,
          number,
          state,
          street,
          zipcode,
        },
      }
      onSetCompanyData(companyData)
    }

    if (currentStep === 2) {
      const key = companyData.doc.replace(/\D/g, "")
      isValid = Object.keys(combo.added).includes(key)
      errorMessage = !isValid
        ? "A primeira maquininha deve ser atrelada ao documento da empresa de cadastro."
        : ""
    }

    if (currentStep === 3) {
      const { doc, email, name, phone } = data
      onSetRepresentativeData({
        doc,
        email,
        name,
        phone,
      })
    }

    if (currentStep === 4) {
      isValid = Object.keys(imageForValidation).length === 2
      errorMessage = !isValid
        ? "Você precisa adicionar uma foto da frente e do verso do documento."
        : ""
    }

    if (!isValid) {
      toast.showError(errorMessage)
      return
    }

    setCurrentStep((prev) => (prev += 1))
  }

  function handlePrevStep() {
    setCurrentStep((prev) => (prev -= 1))
  }

  function handleSetStep(value: number) {
    setCurrentStep(() => value)
  }
  return (
    <stepperContext.Provider
      value={{
        currentStep,
        setStep: handleSetStep,
        nextStep: handleNextStep,
        prevStep: handlePrevStep,
      }}
    >
      {children}
    </stepperContext.Provider>
  )
}
