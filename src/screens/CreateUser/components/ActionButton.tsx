import { StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../../theme/base";
import { Paragraph, TextVariant } from "../../../components/Paragraph";
import { Ionicons } from "@expo/vector-icons";

interface ActionButtonProps {
  label: string;
  variant?: TextVariant;
  color?: TextVariant;
  hasNext?: boolean;
  hasBack?: boolean;
  isClose?: boolean;
  isLast?: boolean;
  onPress?: (data?: any) => void;
}

export function ActionButton({
  label,
  hasNext = false,
  hasBack = false,
  isClose = false,
  isLast = false,
  color = "white",
  variant = "primary",
  onPress,
}: ActionButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[
        styles.buttonContainer,
        { backgroundColor: theme.colors[variant][500] },
        isLast && styles.confirmButton,
      ]}
    >
      {hasBack && (
        <Ionicons
          size={24}
          name="chevron-back-circle-outline"
          color={theme.colors[color][500]}
        />
      )}
      <Paragraph size="md" variant={color}>
        {label}
      </Paragraph>
      {isClose && (
        <Ionicons
          size={24}
          name="close-circle-outline"
          color={theme.colors[color][500]}
        />
      )}
      {hasNext && (
        <Ionicons
          size={24}
          name="chevron-forward-circle-outline"
          color={theme.colors[color][500]}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 8,
    flex: 1,
    gap: 16,
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmButton: {
    backgroundColor: theme.colors.secondary[500],
  },
});
