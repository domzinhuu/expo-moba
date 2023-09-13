import { View } from "react-native";
import { Title } from "../Title";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { theme }  from "src/theme/base"
import { Comerce } from "../../models/comerce";
import { ComerceItem } from "./components/ComerceItem";

interface ComerceListProps {
  headerTitle?: string;
  headerIcon?: keyof typeof Ionicons.glyphMap;
  comerces: Comerce[];
}

export function ComerceList({
  headerTitle,
  headerIcon,
  comerces = [],
}: ComerceListProps) {
  return (
    <>
      {headerTitle && (
        <View style={styles.cardHeader}>
          <Title size="md" variant="white">
            Comércios
          </Title>

          {headerIcon && (
            <Ionicons
              name={headerIcon}
              color={theme.colors.white[500]}
              size={20}
            />
          )}
        </View>
      )}
      
      {comerces.map((comerce) => (
        <ComerceItem key={comerce.ecDoc} {...comerce} />
      ))}
    </>
  );
}
