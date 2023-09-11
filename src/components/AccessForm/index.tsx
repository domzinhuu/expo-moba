import { View } from "react-native";
import { CustomInput } from "../CustomInput";
import { useContext, useState } from "react";
import { createUserContext } from "../../contexts/CreateUserContext";
import { CreateUserAccessData } from "../../models/user";

export function AccessForm() {
  const { accessData, onSetAccessData } = useContext(createUserContext);
  const [confirmPassword, setConfirmPassword] = useState();
  
  function onEmailChange(value: any) {
    const data: CreateUserAccessData = {
      ...accessData,
      email_login: value,
    };

    onSetAccessData(data);
  }

  function onPaswordChange(value: any) {
    const data: CreateUserAccessData = {
      ...accessData,
      password: value,
    };

    onSetAccessData(data);
  }
  
  function onConfirmChange(value: any) {
    setConfirmPassword(value);
  }

  return (
    <View>
      <CustomInput
        value={accessData.email_login}
        keyBoardType="email-address"
        onUpdate={onEmailChange}
        placeholder="Email de login"
      />
      <CustomInput
        value={accessData.password}
        onUpdate={onPaswordChange}
        placeholder="Senha"
        isPassword={true}
      />
      <CustomInput
        value={confirmPassword}
        onUpdate={onConfirmChange}
        placeholder="Confirme sua senha"
        isPassword={true}
      />
    </View>
  );
}
