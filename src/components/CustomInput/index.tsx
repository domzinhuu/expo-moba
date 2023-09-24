import { KeyboardTypeOptions, TextInput, TextInputProps } from "react-native"
import { styles } from "./styles"
import { theme } from "@theme/base"

interface CustomInputProps {
  placeholder: string
  keyBoardType?: KeyboardTypeOptions
  value?: any
  error?: string
  isPassword?: boolean
  onUpdate?: (value?: any) => void
}

export function CustomInput({
  placeholder,
  isPassword,
  keyBoardType = "default",
  value,
  error,
  onUpdate,
}: CustomInputProps) {
  return (
    <TextInput
      accessibilityLabel={`Digite ${placeholder} aqui`}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.gray[500]}
      keyboardType={keyBoardType}
      secureTextEntry={isPassword}
      value={value}
      onChangeText={onUpdate}
      style={styles.input}
    />
  )
}

export function Input(props: TextInputProps) {
  return (
    <TextInput
      {...props}
      style={[styles.newInput, props.style]}
      autoCapitalize="none"
    />
  )
}
