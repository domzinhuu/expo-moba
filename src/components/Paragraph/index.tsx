import { PropsWithChildren } from "react";
import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";

import { Text } from "react-native";
import { theme } from "../../theme/base";

type Size = "sm" | "md";
type Weight = 700 | 400 | 300;
type TextVariant =
  | "primary"
  | "secondary"
  | "white"
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
  const [fontLoaded, fontError] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_700Bold,
  });

  const fonts = {
    300: "Rubik_300Light",
    400: "Rubik_400Regular",
    700: "Rubik_700Bold",
  };

  if (!fontLoaded && !fontError) {
    return null;
  }

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
