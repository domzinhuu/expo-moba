import { TouchableOpacity, View, ScrollView } from "react-native"
import { Paragraph } from "../Paragraph"
import { theme } from "@theme/base"
import { Ionicons } from "@expo/vector-icons"
import { styles } from "./styles"
import { useCallback, useContext, useState } from "react"
import { CreateUserContext } from "../../contexts/CreateUserContext"
import { MachineData } from "../../models/user"
import { AcquirerModal } from "./components/AcquirerModal"

export function AcquirerForm() {
  const [showForm, setShowForm] = useState(false)
  const { combo } = useContext(CreateUserContext)

  const acquirerList = useCallback(() => {
    return Object.keys(combo.added).map((key) => (
      <AcquirerItem key={key} ecList={combo.added[key]} />
    ))
  }, [combo])

  return (
    <ScrollView>
      <View style={styles.container}>
        {(Object.keys(combo.added).length && (
          <View>
            <TouchableOpacity
              style={{
                width: 120,
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "flex-end",
                borderRadius: 6,
                justifyContent: "center",
                backgroundColor: theme.colors.primary[500],
                paddingVertical: 8,
                paddingHorizontal: 4,
                marginVertical: 16,
              }}
              onPress={() => setShowForm(true)}
            >
              <Ionicons
                color={theme.colors.white[500]}
                name="add-circle-outline"
                size={20}
              />
              <Paragraph variant="white">Maquininha</Paragraph>
            </TouchableOpacity>

            {acquirerList()}
          </View>
        )) || (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
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
            <EmptyList />
          </View>
        )}

        <AcquirerModal isOpen={showForm} onClose={() => setShowForm(false)} />
      </View>
    </ScrollView>
  )
}
interface AcquirerItemProps {
  ecList: MachineData[]
}

function AcquirerItem({ ecList }: AcquirerItemProps) {
  const ecName = ecList[0].ecName
  const ecDoc = ecList[0].ecDoc
  const { onDeleteAcquirer } = useContext(CreateUserContext)

  function handleDeleteAcquirer(acqDoc: string) {
    onDeleteAcquirer(ecDoc, acqDoc)
  }

  return (
    <View style={styles.item}>
      <View style={styles.itemHeading}>
        <Paragraph variant="white" size="sm" weight={700}>
          {ecName}
        </Paragraph>
        <Paragraph variant="white">{ecDoc}</Paragraph>
      </View>

      {ecList.map((acquirer: MachineData, index: number) => (
        <View
          key={acquirer.acqDoc}
          style={
            index === ecList.length - 1
              ? [styles.bodyContainer, styles.endBorderRadius]
              : [styles.bodyContainer]
          }
        >
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
  )
}

function EmptyList() {
  return (
    <View
      style={{ paddingTop: 48, justifyContent: "center", alignItems: "center" }}
    >
      <Paragraph size="md">Nenhuma maquininha cadastrada.</Paragraph>
    </View>
  )
}
