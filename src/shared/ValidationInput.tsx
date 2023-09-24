import { Input } from "@components/CustomInput"
import { FieldError } from "react-hook-form"
import { KeyboardTypeOptions, StyleSheet, View } from "react-native"
import { ErrorMessage } from "./ErrorMessage"
import { theme } from "@theme/base"

interface ValidationInputProps {
  value: any
  placeholder: string
  error: FieldError | undefined
  keyBoardType?: KeyboardTypeOptions
  isPassword?: boolean
  onChange: (value: any) => void
}

export function ValidationInput({
  onChange,
  value,
  isPassword = false,
  placeholder,
  keyBoardType = "default",
  error,
}: ValidationInputProps) {
  return (
    <View style={{ position: "relative", marginBottom: 8 }}>
      <Input
        onChangeText={(val) => onChange(val)}
        value={value}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        keyboardType={keyBoardType}
        placeholderTextColor={error && theme.colors.danger[500]}
        style={error ? styles.inputError : {}}
      />
      <ErrorMessage show={!!error} message={error?.message} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputError: {
    borderBottomColor: theme.colors.danger[500],
  },
})
