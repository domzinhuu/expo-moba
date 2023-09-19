import { Paragraph } from "@components/Paragraph";
import { ChevronDownIcon, Icon, Text } from "@gluestack-ui/themed";
import { Select } from "@gluestack-ui/themed";
import { SelectInput } from "@gluestack-ui/themed";
import { SelectPortal } from "@gluestack-ui/themed";
import { SelectContent } from "@gluestack-ui/themed";
import { SelectDragIndicator } from "@gluestack-ui/themed";
import { SelectItem } from "@gluestack-ui/themed";
import { SelectDragIndicatorWrapper } from "@gluestack-ui/themed";
import { SelectBackdrop } from "@gluestack-ui/themed";
import { SelectIcon } from "@gluestack-ui/themed";
import { SelectTrigger } from "@gluestack-ui/themed";
import {
  Button,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@gluestack-ui/themed";
import { useDashboard } from "@hooks/useDashboard";
import { theme } from "@theme/base";
import { formatDate } from "@utils/formatters";
import { DateTime } from "luxon";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

enum Period {
  SEVEN = "7 Dias",
  MONTH = "30 Dias",
  QUARTER = "90 Dias",
  CUSTOM = "Personalizado",
}

interface FilterModal {
  isOpen: boolean;
  onClose: (filterType: string) => void;
}
export function FilterModal({ isOpen, onClose }: FilterModal) {
  const [isStartDatePickerVisible, setStartDatePickerVisibility] =
    useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
  const [period, setPeriod] = useState("");

  const { getFilteredData, toggleFilterType } = useDashboard();
  const [initialDate, setInitialDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const showDatePicker = (type?: string) => {
    if (type === "start") {
      setStartDatePickerVisibility(true);
    } else {
      setEndDatePickerVisibility(true);
    }
  };

  const hideDatePicker = (type?: string) => {
    if (type === "start") {
      setStartDatePickerVisibility(false);
    } else {
      setEndDatePickerVisibility(false);
    }
  };

  const handleChangeDate = (type: string, date: string) => {
    if (type === "start") {
      setInitialDate(date);
    } else {
      setEndDate(date);
    }
  };

  const handleConfirm = async () => {
    const { start, end } = getRangeDateByPeriod(period);
    setInitialDate("");
    setEndDate("");
    setStartDatePickerVisibility(false);
    setEndDatePickerVisibility(false);
    handleChangePeriod(period);
    await getFilteredData(start, end);
  };

  const handleCleanForm = async () => {
    setInitialDate("");
    handleChangePeriod("");
    setEndDate("");
    setStartDatePickerVisibility(false);
    setEndDatePickerVisibility(false);
    await getFilteredData();
    onClose("");
  };

  const getRangeDateByPeriod = (
    period: string
  ): { start: string; end: string } => {
    const dateRange = {
      start: "",
      end: "",
    };

    switch (period) {
      case Period.SEVEN:
        dateRange.start = DateTime.now().toISODate() || "";
        dateRange.end = DateTime.now().plus({ days: 7 }).toISODate() || "";
        break;
      case Period.MONTH:
        dateRange.start = DateTime.now().toISODate() || "";
        dateRange.end = DateTime.now().plus({ months: 1 }).toISODate() || "";
        break;
      case Period.QUARTER:
        dateRange.start = DateTime.now().toISODate() || "";
        dateRange.end = DateTime.now().plus({ months: 3 }).toISODate() || "";
        break;
      default:
        dateRange.start = DateTime.fromISO(initialDate).toISODate() || "";
        dateRange.end = DateTime.fromISO(endDate).toISODate() || "";
    }

    return dateRange;
  };

  const handleChangePeriod = (value: string) => {
    setPeriod(value);
    toggleFilterType(value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Paragraph>Filtrar por períodos</Paragraph>
        </ModalHeader>
        <ModalBody>
          <Select onValueChange={handleChangePeriod}>
            <SelectTrigger
              backgroundColor="$white"
              borderColor="#f1f1f1"
              marginBottom={16}
            >
              <SelectInput value={period} placeholder="Selecione" />
              <SelectIcon mr="$3">
                <Icon as={ChevronDownIcon} />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal position="relative">
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="7 Dias" value="7 Dias" />
                <SelectItem label="30 Dias" value="30 Dias" />
                <SelectItem label="90 Dias" value="90 Dias" />
                <SelectItem label="Personalizado" value="Personalizado" />
              </SelectContent>
            </SelectPortal>
          </Select>

          {period === "Personalizado" && (
            <>
              <View style={{ marginBottom: 16 }}>
                <TouchableOpacity
                  style={styles.inputDateField}
                  onPress={() => showDatePicker("start")}
                >
                  <Paragraph>
                    {initialDate ? formatDate(initialDate) : "De..."}
                  </Paragraph>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isStartDatePickerVisible}
                  mode="date"
                  locale="pt_BR"
                  onConfirm={(e) => handleChangeDate("start", e.toISOString())}
                  onCancel={() => hideDatePicker("start")}
                />
              </View>
              <View>
                <TouchableOpacity
                  style={styles.inputDateField}
                  onPress={() => showDatePicker()}
                >
                  <Paragraph>
                    {endDate ? formatDate(endDate) : "Até..."}
                  </Paragraph>
                </TouchableOpacity>
                <DateTimePickerModal
                  textColor="$purple600"
                  accentColor="$purple600"
                  isVisible={isEndDatePickerVisible}
                  mode="date"
                  locale="pt_BR"
                  onConfirm={(e) => handleChangeDate("end", e.toISOString())}
                  onCancel={() => hideDatePicker()}
                />
              </View>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            backgroundColor="$blueGray200"
            size="sm"
            onPress={handleCleanForm}
            marginRight={16}
          >
            <Text color={theme.colors.gray[700]}>Limpar</Text>
          </Button>
          <Button
            backgroundColor="$purple600"
            size="sm"
            onPress={handleConfirm}
          >
            <Text color={theme.colors.white[500]}>Confirmar</Text>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputDateField: {
    backgroundColor: theme.colors.white[500],
    borderWidth: 1,
    borderColor: theme.colors.gray[300],
    padding: 12,
    borderRadius: 6,
  },
});
