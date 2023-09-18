import React, { PropsWithChildren, createContext, useState } from "react";
import {
  CreateUserAccessData,
  CreateUserAcquirerData,
  CreateUserCompanyData,
  CreateUserRepresentativeData,
  MachineData,
} from "@models/user";

interface CreateUserContextProps {
  companyData: CreateUserCompanyData;
  representativeData: CreateUserRepresentativeData;
  accessData: CreateUserAccessData;
  combo: CreateUserAcquirerData;
  onSetCompanyData: (data: CreateUserCompanyData) => void;
  onSetRepresentativeData: (data: CreateUserRepresentativeData) => void;
  onSetAccessData: (data: CreateUserAccessData) => void;
  onSetComboData: (data: MachineData) => void;
  onDeleteAcquirer: (key: string, acqDoc: string) => void;
}

export const createUserContext = createContext({} as CreateUserContextProps);

export function CreateUserProvider({ children }: PropsWithChildren) {
  const [currentStep, setCurrentStep] = useState(1);
  const [companyData, setCompanyData] = useState<CreateUserCompanyData>({
    ecAddress: {},
  } as CreateUserCompanyData);
  const [reprData, setReprData] = useState<CreateUserRepresentativeData>(
    {} as CreateUserRepresentativeData
  );
  const [accessData, setAccessData] = useState<CreateUserAccessData>(
    {} as CreateUserAccessData
  );
  const [combo, setCombo] = useState<CreateUserAcquirerData>({
    added: {},
  } as CreateUserAcquirerData);

  function handleSetCompanyData(data: CreateUserCompanyData) {
    setCompanyData(data);
  }
  function handleSetReprData(data: CreateUserRepresentativeData) {
    setReprData(data);
  }
  function handleSetAccessData(data: CreateUserAccessData) {
    setAccessData(data);
  }
  function handleSetCombo(data: MachineData) {
    setCombo((state) => {
      const newValue = state;

      if (newValue.added[data.ecDoc]) {
        newValue.added[data.ecDoc] = [...newValue.added[data.ecDoc], data];
      } else {
        newValue.added[data.ecDoc] = [data];
      }
      return newValue;
    });
  }

  function handleDeleteAcquirer(key: string, acqDoc: string) {
    setCombo((state) => {
      const newValue = { ...state };

      newValue.added[key] = state.added[key].filter(
        (item) => item.acqDoc !== acqDoc
      );

      return newValue;
    });
  }

  return (
    <createUserContext.Provider
      value={{
        representativeData: reprData,
        companyData,
        accessData,
        combo,
        onDeleteAcquirer: handleDeleteAcquirer,
        onSetCompanyData: handleSetCompanyData,
        onSetComboData: handleSetCombo,
        onSetRepresentativeData: handleSetReprData,
        onSetAccessData: handleSetAccessData,
      }}
    >
      {children}
    </createUserContext.Provider>
  );
}
