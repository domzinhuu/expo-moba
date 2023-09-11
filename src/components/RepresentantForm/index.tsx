import { View } from "react-native";
import { CustomInput } from "../CustomInput";
import { useContext } from "react";
import { createUserContext } from "../../contexts/CreateUserContext";
import { CreateUserRepresentativeData } from "../../models/user";

export function RepresentantForm() {
  const { representativeData, onSetRepresentativeData } =
    useContext(createUserContext);

  function handleEmailChange(value: any) {
    const data: CreateUserRepresentativeData = {
      ...representativeData,
      email: value,
    };

    onSetRepresentativeData(data);
  }

  function handleNameChange(value: any) {
    const data: CreateUserRepresentativeData = {
      ...representativeData,
      name: value,
    };

    onSetRepresentativeData(data);
  }

  function handlePhoneChange(value: any) {
    const data: CreateUserRepresentativeData = {
      ...representativeData,
      phone: value,
    };

    onSetRepresentativeData(data);
  }

  function handleDocChange(value: any) {
    const data: CreateUserRepresentativeData = {
      ...representativeData,
      doc: value,
    };

    onSetRepresentativeData(data);
  }

  return (
    <View>
      <CustomInput
        onUpdate={handleEmailChange}
        keyBoardType="email-address"
        value={representativeData.email}
        placeholder="E-mail do representante"
      />
      <CustomInput
        onUpdate={handleNameChange}
        value={representativeData.name}
        placeholder="Nome do representante"
      />
      <CustomInput
        onUpdate={handlePhoneChange}
        keyBoardType="phone-pad"
        value={representativeData.phone}
        placeholder="Telefone do representante"
      />
      <CustomInput
        onUpdate={handleDocChange}
        keyBoardType="number-pad"
        value={representativeData.doc}
        placeholder="Documento do representante"
      />
    </View>
  );
}
