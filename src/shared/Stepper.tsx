import { useNavigation } from "@react-navigation/native"
import { PropsWithChildren, useContext } from "react"
import { StyleSheet, View } from "react-native"
import { Title } from "../components/Title"
import { ActionButton } from "../screens/CreateUser/components/ActionButton"
import { theme } from "@theme/base"
import { stepperContext } from "../contexts/StepperContext"
import { CreateUserContext } from "@contexts/CreateUserContext"

interface StepperActionProps {
  totalStep: number
  onFinish: (data?: any) => void
}

export const Stepper = {
  Title: ({ children }: PropsWithChildren) => (
    <View style={styles.stepTitle}>
      <Title size="md" variant="white">
        {children}
      </Title>
    </View>
  ),
  Content: ({ children }: PropsWithChildren) => (
    <View style={styles.stepContent}>{children}</View>
  ),
  Actions: ({ totalStep = 1, onFinish }: StepperActionProps) => {
    const { goBack } = useNavigation()
    const { currentStep, nextStep, prevStep } = useContext(stepperContext)
    const { handleSubmit } = useContext(CreateUserContext)
    return (
      <View style={styles.actionBottom}>
        <ActionButton
          label={currentStep === 1 ? "Fechar" : "Voltar"}
          variant="lightGray"
          color="black"
          onPress={currentStep === 1 ? goBack : prevStep}
          isClose={currentStep === 1}
          hasBack={currentStep > 1}
        />
        <ActionButton
          isLast={currentStep === totalStep}
          label={currentStep === totalStep ? "Confirmar" : "Proximo"}
          hasNext
          onPress={
            currentStep === totalStep
              ? handleSubmit(onFinish)
              : handleSubmit(nextStep)
          }
        />
      </View>
    )
  },
}

const styles = StyleSheet.create({
  stepTitle: {
    paddingHorizontal: 24,
    paddingTop: 56,
    width: "100%",
    height: 100,
  },
  actionBottom: {
    flexDirection: "row",
    gap: 4,
    padding: 8,
    paddingVertical: 16,
    height: 80,
    backgroundColor: theme.colors.white[500],
  },
  stepContent: {
    padding: 16,
    width: "100%",
    flex: 1,
    backgroundColor: theme.colors.white[500],
  },
})
