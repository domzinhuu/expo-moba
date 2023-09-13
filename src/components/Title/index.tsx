import { PropsWithChildren } from "react";
import { Text } from "react-native";
import { theme } from "src/theme/base";

type Size = "md" | "lg";
type Weight = 700 | 400;
type TextVariant = "primary" | "secondary" | "white" | "black" | "gray";

interface TitleProps extends PropsWithChildren {
  variant?: TextVariant;
  weight?: Weight;
  size?: Size;
  disabled?: boolean;
}

export function Title({
  size = "lg",
  variant = "black",
  weight = 700,
  disabled = false,
  children,
}: TitleProps) {
  const fonts = {
    400: "Rubik_400Regular",
    700: "Rubik_700Bold",
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
