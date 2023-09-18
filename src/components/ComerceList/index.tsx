import { TouchableOpacity, View } from "react-native";
import { Title } from "../Title";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "@theme/base";
import { Comerce } from "../../models/comerce";
import { ComerceItem } from "./components/ComerceItem";
import { useEffect, useState } from "react";
import { FilterModal } from "@screens/Dashboard/components/FilterModal";
import { Paragraph } from "@components/Paragraph";
import { useDashboard } from "@hooks/useDashboard";

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
  const [showFilter, setShowFilter] = useState(false);
  const { currentFilter } = useDashboard();

  function handleFilterToggle() {
    setShowFilter(true);
  }

  function handleCloseFilter(type: string) {
    setShowFilter(false);
  }

  return (
    <>
      {headerTitle && (
        <View style={styles.cardHeader}>
          <View>
            <Title size="md" variant="white">
              Filtros
            </Title>
            <Paragraph variant="white">
              {currentFilter === "Personalizado"
                ? "Periodo Personalizado"
                : `Últimos ${currentFilter}`}
            </Paragraph>
          </View>
          {headerIcon && (
            <TouchableOpacity onPress={handleFilterToggle}>
              <Ionicons
                name={headerIcon}
                color={theme.colors.white[500]}
                size={20}
              />
            </TouchableOpacity>
          )}
        </View>
      )}

      {comerces.map((comerce) => (
        <ComerceItem key={comerce.ecDoc} {...comerce} />
      ))}

      <FilterModal isOpen={showFilter} onClose={handleCloseFilter} />
    </>
  );
}
