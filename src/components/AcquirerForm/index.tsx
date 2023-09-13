import { Text, TouchableOpacity, View } from "react-native";
import { CustomInput } from "../CustomInput";
import { Paragraph } from "../Paragraph";
import { theme } from "../../theme/base";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useCallback, useContext, useState } from "react";
import { Title } from "../Title";
import { createUserContext } from "../../contexts/CreateUserContext";
import { MachineData } from "../../models/user";

export function AcquirerForm() {
  const [showForm, setShowForm] = useState(false);
  const [ecName, setEcName] = useState("");
  const [ecDoc, setEcDoc] = useState("");
  const [acqName, setAcqName] = useState("");
  const [acqDoc, setAcqDoc] = useState("");
  const { combo, onSetComboData } = useContext(createUserContext);

  const acquirerList = useCallback(() => {
    return Object.keys(combo.added).map((key) => (
      <AcquirerItem key={key} ecList={combo.added[key]} />
    ));
  }, [combo]);

  function handleAddAcquirer() {
    const acquirer: MachineData = {
      acqDoc,
      acqName,
      ecDoc,
      ecName,
    };

    onSetComboData(acquirer);
    setEcDoc("");
    setAcqName("");
    setAcqDoc("");
    setEcName("");
    setShowForm(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.acquirerContent}>
        {!showForm && (
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => setShowForm(true)}
              style={styles.newAcquirer}
            >
              <Ionicons
                name="add-circle-outline"
                color={theme.colors.white[500]}
                size={20}
              />
              <Paragraph variant="white">Adicionar Maquininha</Paragraph>
            </TouchableOpacity>
          </View>
        )}

        {showForm && (
          <View>
            <CustomInput
              value={ecDoc}
              onUpdate={setEcDoc}
              keyBoardType="numeric"
              placeholder="Documento do EC"
            />
            <CustomInput
              value={ecName}
              onUpdate={setEcName}
              placeholder="Nome do EC"
            />
            <CustomInput
              value={acqDoc}
              onUpdate={setAcqDoc}
              keyBoardType="numeric"
              placeholder="CNPJ da Maquinnha"
            />
            <CustomInput
              value={acqName}
              onUpdate={setAcqName}
              placeholder="Nome da Maquininha"
            />
          </View>
        )}

        {!showForm && !Object.keys(combo.added).length && <EmptyList />}
        {!showForm && acquirerList()}

        {showForm && (
          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => setShowForm(false)}
              style={[
                styles.formButton,
                { backgroundColor: theme.colors.danger[500] },
              ]}
            >
              <Paragraph variant="white">Fechar</Paragraph>
              <Ionicons
                color={theme.colors.white[500]}
                size={20}
                name="close-outline"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleAddAcquirer}
              style={[
                styles.formButton,
                { backgroundColor: theme.colors.secondary[500] },
              ]}
            >
              <Paragraph variant="white">Salvar</Paragraph>
              <Ionicons
                color={theme.colors.white[500]}
                size={20}
                name="save-outline"
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

interface AcquirerItemProps {
  ecList: MachineData[];
}

function AcquirerItem({ ecList }: AcquirerItemProps) {
  const ecName = ecList[0].ecName;
  const ecDoc = ecList[0].ecDoc;
  const { onDeleteAcquirer } = useContext(createUserContext);

  function handleDeleteAcquirer(acqDoc: string) {
    onDeleteAcquirer(ecDoc, acqDoc);
  }

  return (
    <View style={styles.item}>
      <View style={styles.itemHeading}>
        <Paragraph variant="white" size="sm" weight={700}>
          {ecName}
        </Paragraph>
        <Paragraph variant="white">{ecDoc}</Paragraph>
      </View>

      {ecList.map((acquirer: MachineData) => (
        <View key={acquirer.acqDoc} style={styles.bodyContainer}>
          <View style={styles.itemBody}>
            <Paragraph size="md">{acquirer.acqName}</Paragraph>
            <Paragraph>{acquirer.acqDoc}</Paragraph>
          </View>

          {ecList.length > 1 && (
            <TouchableOpacity
              onPress={() => handleDeleteAcquirer(acquirer.acqDoc)}
              style={[
                styles.actionButton,
                { backgroundColor: theme.colors.danger[500] },
              ]}
            >
              <Ionicons
                name="trash-bin-outline"
                color={theme.colors.white[500]}
                size={16}
              />
            </TouchableOpacity>
          )}
        </View>
      ))}
    </View>
  );
}

function EmptyList() {
  return (
    <View
      style={{ paddingTop: 48, justifyContent: "center", alignItems: "center" }}
    >
      <Paragraph size="md">
        Nenhuma maquininha cadastrada.
      </Paragraph>
    </View>
  );
}
