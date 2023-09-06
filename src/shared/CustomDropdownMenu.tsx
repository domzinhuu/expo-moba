// CustomDropdownMenu.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface CustomDropdownMenuProps {
  onProfilePress: () => void;
  onLogoutPress: () => void;
}

export const CustomDropdownMenu: React.FC<CustomDropdownMenuProps> = ({
  onProfilePress,
  onLogoutPress,
}) => {
  return (
    <View
      style={{
        position: "absolute",
        width:100,
        padding:16,
        borderRadius:8,
        gap:16,
        top: 80,
        right: 20,
        backgroundColor: "white",
      }}
    >
      <TouchableOpacity onPress={onProfilePress}>
        <Text>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onLogoutPress}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};
