import { View } from "react-native"
import { Stepper } from "../../shared/Stepper"
import { theme } from "@theme/base"
import { ComerceForm } from "@components/ComerceForm"
import { AcquirerForm } from "@components/AcquirerForm"
import { RepresentantForm } from "@components/RepresentantForm"
import UploadForm from "@components/UploadForm"
import { AccessForm } from "@components/AccessForm"
import { useContext, useMemo, useState } from "react"
import { StepperProvider, stepperContext } from "@contexts/StepperContext"
import {
  CreateUserProvider,
  CreateUserContext,
} from "@contexts/CreateUserContext"
import { styles } from "./styles"
import { StatusBar } from "expo-status-bar"
import { CreateUserEntity } from "@models/createUser"
import { useCustomToast } from "@hooks/useCustomToast"
import { AppError } from "@utils/AppErrors"
import { api } from "@services/api"
import { useNavigation } from "@react-navigation/native"
import { Loading } from "@components/Loading"

interface StepType {
  title: string
  component: JSX.Element
}
const steps: Record<number, StepType> = {
  1: {
    title: "1º Passo: Dados da empresa",
    component: <ComerceForm />,
  },
  2: {
    title: "2º Passo: Dados da credenciadora",
    component: <AcquirerForm />,
  },
  3: {
    title: "3º Passo: Dados do Representante",
    component: <RepresentantForm />,
  },
  4: {
    title: "4º Passo: Validação de documentos",
    component: <UploadForm />,
  },
  5: {
    title: "5º Passo: Dados da acesso",
    component: <AccessForm />,
  },
}

function CreateUser() {
  const [isLoading, setIsLoading] = useState(false)
  const { currentStep, setStep } = useContext(stepperContext)
  const navigation = useNavigation()
  const {
    companyData,
    combo,
    representativeData,
    imageForValidation,
    onClear,
  } = useContext(CreateUserContext)

  const step = steps[currentStep]
  const totalStep = useMemo(() => Object.keys(steps).length, [steps])

  const toast = useCustomToast()

  async function handleSaveUser(data: any) {
    setIsLoading(true)
    const createUserData: CreateUserEntity = {
      ec: {
        combo: combo,
        companyName: companyData.companyName,
        doc: companyData.doc.replace(/\D/g, ""),
        phone: companyData.phone,
        revenue: companyData.revenue,
        ecAddress: companyData.ecAddress,
        representative: {
          ...representativeData,
          doc: representativeData.doc.replace(/\D/g, ""),
        },
      },
      user: {
        email_login: data.email_login,
        password: data.password,
      },
    }

    try {
      const documents = new FormData()
      documents.append("name", data.email_login)
      documents.append("documents", imageForValidation.front)
      documents.append("documents", imageForValidation.back)

      console.log(
        createUserData.ec.doc,
        JSON.stringify(createUserData.ec.combo)
      )
      await api.postForm("/upload", documents)
      await api.post("/register", createUserData)

      toast.showSuccess("Registro finalizado com sucesso!")
      onClear()

      navigation.navigate("successScreen")
    } catch (error) {
      const isAppError = AppError.isAppError(error)
      const description = isAppError
        ? (error as AppError).message
        : "Não foi possivel realizar o login. Tente novamente mais tarde."

      toast.showError(description)
      setIsLoading(false)
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.primary[500] }}>
      <View style={styles.container}>
        <Stepper.Title>{step.title}</Stepper.Title>
        {isLoading && (
          <View style={{ backgroundColor: theme.colors.white[500], flex: 1 }}>
            <Loading />
          </View>
        )}
        {!isLoading && (
          <>
            <Stepper.Content>{step.component}</Stepper.Content>
            <Stepper.Actions totalStep={totalStep} onFinish={handleSaveUser} />
          </>
        )}
      </View>
    </View>
  )
}

export default function CreateUserScreen() {
  return (
    <CreateUserProvider>
      <StepperProvider>
        <StatusBar style="light" translucent backgroundColor={"transparent"} />
        <CreateUser />
      </StepperProvider>
    </CreateUserProvider>
  )
}
