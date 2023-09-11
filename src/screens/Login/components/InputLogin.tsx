import { StyleSheet, TextInput } from "react-native";
import { theme } from "../../../theme/base";

interface InputLoginProps {
  placeholder: string;
  value?: any;
  error?: string;
  isPassword?: boolean;
  onUpdate?: (value: any) => void;
}

export function InputLogin({
  placeholder,
  isPassword,
  value,
  onUpdate,
}: InputLoginProps) {
  return (
    <TextInput
      accessibilityLabel={`Digite ${placeholder} aqui`}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.gray[500]}
      secureTextEntry={isPassword}
      value={value}
      onChangeText={onUpdate}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor:theme.colors.gray[500],
    fontSize:theme.size.md
  },
});
