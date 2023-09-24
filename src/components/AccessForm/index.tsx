import { View } from "react-native"
import { CustomInput } from "../CustomInput"
import { useContext, useState } from "react"
import { CreateUserContext } from "../../contexts/CreateUserContext"
import { CreateUserAccessData } from "../../models/user"
import { Controller } from "react-hook-form"
import { ValidationInput } from "@shared/ValidationInput"
import { onChange } from "@gluestack-style/react"
import { validatePassword } from "@utils/validate.functions"

export function AccessForm() {
  const { accessData, onSetAccessData } = useContext(CreateUserContext)
  const [confirmPassword, setConfirmPassword] = useState()
  const { control, getValues } = useContext(CreateUserContext)

  function onEmailChange(value: any) {
    const data: CreateUserAccessData = {
      ...accessData,
      email_login: value,
    }

    onSetAccessData(data)
  }

  function onPaswordChange(value: any) {
    const data: CreateUserAccessData = {
      ...accessData,
      password: value,
    }

    onSetAccessData(data)
  }

  function onConfirmChange(value: any) {
    setConfirmPassword(value)
  }

  return (
    <View>
      <Controller
        control={control}
        name="email_login"
        rules={{
          required: "Campo obrigatório",
        }}
        render={({ field: { value, onChange }, formState: { errors } }) => (
          <ValidationInput
            value={value}
            onChange={onChange}
            keyBoardType="email-address"
            placeholder="Email de login"
            error={errors.email_login}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: "Campo obrigatório",
          validate: {
            pattern: validatePassword,
          },
        }}
        render={({ field: { value, onChange }, formState: { errors } }) => (
          <ValidationInput
            value={value}
            onChange={onChange}
            placeholder="Senha"
            isPassword={true}
            error={errors.password}
          />
        )}
      />

      <Controller
        control={control}
        name="passwordConfirm"
        rules={{
          required: "Campo obrigatório",
          validate: (value: string) => {
            if (value !== getValues("password")) {
              return "A senha informada é diferente  da senha digitada acima"
            }
            return true
          },
        }}
        render={({ field: { value, onChange }, formState: { errors } }) => (
          <ValidationInput
            value={value}
            onChange={onChange}
            placeholder="Confirme sua senha"
            isPassword={true}
            error={errors.passwordConfirm}
          />
        )}
      />
    </View>
  )
}
