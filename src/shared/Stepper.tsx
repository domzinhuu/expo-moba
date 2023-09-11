import { useNavigation } from "@react-navigation/native";
import { PropsWithChildren, useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Title } from "../components/Title";
import { ActionButton } from "../screens/CreateUser/components/ActionButton";
import { theme } from "../theme/base";
import { stepperContext } from "../contexts/StepperContext";

interface StepperActionProps {
  totalStep: number;
  onFinish: (data?: any) => void;
}

export const Stepper = {
  Title: ({ children }: PropsWithChildren) => (
    <View style={styles.stepTitle}>
      <Title variant="white">{children}</Title>
    </View>
  ),
  Content: ({ children }: PropsWithChildren) => (
    <ScrollView>
      <View style={styles.stepContent}>{children}</View>
    </ScrollView>
  ),
  Actions: ({ totalStep = 1, onFinish }: StepperActionProps) => {
    const { goBack } = useNavigation();
    const { currentStep, nextStep, prevStep } = useContext(stepperContext);
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
          onPress={currentStep === totalStep ? onFinish : nextStep}
        />
      </View>
    );
  },
};

const styles = StyleSheet.create({
  stepTitle: {
    padding: 24,
    marginTop: theme.space[32],
    width: "100%",
  },
  actionBottom: {
    flexDirection: "row",
    gap: 4,
    padding: 8,
    paddingVertical: 16,
  },
  stepContent: {
    padding: 16,
    width: "100%",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
});
