import { LinearGradient } from "expo-linear-gradient";
import { PropsWithChildren } from "react";
import { theme }  from "@theme/base"
import { StyleSheet } from "react-native";

type Position = "center" | "space-between" | "flex-start";

interface BackgroundGradientProps extends PropsWithChildren {
  position?: Position;
}

export function BackgroundGradient({
  children,
  position = "center",
}: BackgroundGradientProps) {
  return (
    <LinearGradient
      start={{ x: 1, y: 0.3 }}
      end={{ x: 1, y: 1.1 }}
      colors={[theme.colors.primary[500], theme.colors.secondary[500]]}
      style={[styles.gradient]}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    backgroundColor: theme.colors.primary[500],
  },
});
