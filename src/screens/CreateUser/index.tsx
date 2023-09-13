import { View } from "react-native";

import { ComerceForm } from "../../components/ComerceForm";
import { BackgroundGradient } from "../../shared/BackgroundGradient";
import { Title } from "../../components/Title";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { ActionButton } from "./components/ActionButton";
import { RepresentantForm } from "../../components/RepresentantForm";
import { useContext, useMemo, useState } from "react";
import { AcquirerForm } from "../../components/AcquirerForm";
import { AccessForm } from "../../components/AccessForm";
import UploadForm from "../../components/UploadForm";
import {
  CreateUserProvider,
  createUserContext,
} from "../../contexts/CreateUserContext";
import { StepperProvider, stepperContext } from "../../contexts/StepperContext";
import { Stepper } from "../../shared/Stepper";
import { theme } from "../../theme/base";

interface StepType {
  title: string;
  component: JSX.Element;
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
};

function CreateUser() {
  const { currentStep, setStep } = useContext(stepperContext);
  const { accessData, combo, companyData, representativeData } =
    useContext(createUserContext);
  const step = steps[currentStep];
  const totalStep = useMemo(() => Object.keys(steps).length, [steps]);

  function handleSaveUser() {
    setStep(1);
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.primary[700] }}>
      <View style={styles.container}>
        <Stepper.Title>{step.title}</Stepper.Title>
        <Stepper.Content>{step.component}</Stepper.Content>
        <Stepper.Actions totalStep={totalStep} onFinish={handleSaveUser} />
      </View>
    </View>
  );
}

export default function CreateUserScreen() {
  return (
    <CreateUserProvider>
      <StepperProvider>
        <CreateUser />
      </StepperProvider>
    </CreateUserProvider>
  );
}
