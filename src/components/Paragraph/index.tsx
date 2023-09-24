import { Text } from "react-native";
import { theme } from "@theme/base";

type Size = "xs" | "sm" | "md";
type Weight = 700 | 400 | 300;
export type TextVariant =
  | "primary"
  | "secondary"
  | "white"
  | "lightGray"
  | "black"
  | "gray"
  | "danger";

interface ParagraphProps {
  children?: any;
  variant?: TextVariant;
  weight?: Weight;
  size?: Size;
  disabled?: boolean;
}

export function Paragraph({
  size = "sm",
  variant = "black",
  weight = 400,
  disabled = false,
  children,
}: ParagraphProps) {
  const fonts = {
    300: "Roboto_300Light",
    400: "Roboto_400Regular",
    700: "Roboto_700Bold",
  };

  return (
    <Text
      style={{
        fontFamily: fonts[weight],
        color: disabled ? theme.colors.gray[500] : theme.colors[variant][500],
        fontSize: theme.size[size],
      }}
    >
      {children}
    </Text>
  );
}
