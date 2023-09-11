import { PropsWithChildren, createContext, useState } from "react";

interface StepperContextProps {
  currentStep: number;
  setStep: (value: number) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export const stepperContext = createContext({} as StepperContextProps);

export function StepperProvider({ children }: PropsWithChildren) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  function handleNextStep() {
    setCurrentStep((prev) => (prev += 1));
  }

  function handlePrevStep() {
    setCurrentStep((prev) => (prev -= 1));
  }

  function handleSetStep(value: number) {
    setCurrentStep(() => value);
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
  );
}
