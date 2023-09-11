import { TouchableOpacity } from "react-native";
import { Paragraph, TextVariant } from "../Paragraph";

interface LinkProps {
  text: string;
  variant?: TextVariant;
  onPress?: (data?: any) => void;
}

export function CustomLink({ text, variant, onPress }: LinkProps) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <Paragraph variant={variant}>{text}</Paragraph>
    </TouchableOpacity>
  );
}
