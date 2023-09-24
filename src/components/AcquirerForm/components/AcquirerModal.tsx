import { Paragraph } from "@components/Paragraph"
import { CreateUserContext } from "@contexts/CreateUserContext"
import {
  CheckIcon,
  Checkbox,
  ModalContent,
  ModalFooter,
} from "@gluestack-ui/themed"
import { Button } from "@gluestack-ui/themed"
import { CheckboxIndicator } from "@gluestack-ui/themed"
import { CheckboxLabel } from "@gluestack-ui/themed"
import { CheckboxIcon } from "@gluestack-ui/themed"
import { ModalBody } from "@gluestack-ui/themed"
import { ModalHeader } from "@gluestack-ui/themed"
import { ModalBackdrop } from "@gluestack-ui/themed"
import { Modal } from "@gluestack-ui/themed"
import { ValidationInput } from "@shared/ValidationInput"
import { formatDocument } from "@utils/formatters"
import { useContext, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { View } from "react-native"

interface AcquirerModalProps {
  isOpen: boolean
  onClose: () => void
}

type AcquirerProps = {
  ecDoc: string
  ecName: string
  acqDoc: string
  acqName: string
}

export function AcquirerModal({ isOpen, onClose }: AcquirerModalProps) {
  const [sameDoc, setSameDoc] = useState(false)
  const { companyData, combo, onSetComboData } = useContext(CreateUserContext)

  const {
    control: acqControl,
    setValue,
    clearErrors,
    reset,
    handleSubmit,
  } = useForm<AcquirerProps>()

  const handleOnClose = () => {
    reset()
    clearErrors()
    onClose()
  }

  const handleSave = (data: AcquirerProps) => {
    onSetComboData(data)
    handleOnClose()
  }

  const handleToggleSameDoc = (value: boolean) => {
    if (value) {
      setValue("ecDoc", companyData.doc, { shouldValidate: true })
      setValue("ecName", companyData.companyName, { shouldValidate: true })
    } else {
      setValue("ecDoc", "", { shouldDirty: false, shouldTouch: false })
      setValue("ecName", "", { shouldDirty: false, shouldTouch: false })
    }

    setSameDoc(value)
  }

  return (
    <Modal isOpen={isOpen} onClose={handleOnClose}>
      <ModalBackdrop />
      <ModalContent backgroundColor="$white">
        <ModalHeader>
          <Paragraph weight={700} size="md">
            Cadastre uma maquininha
          </Paragraph>
        </ModalHeader>
        <ModalBody>
          <View>
            <Controller
              control={acqControl}
              rules={{
                required: "Campo obrigatório",
              }}
              name="ecDoc"
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <ValidationInput
                  onChange={(val) => onChange(formatDocument(val))}
                  value={value}
                  placeholder="Documento do comércio"
                  error={errors.ecDoc}
                />
              )}
            />

            <Controller
              control={acqControl}
              name="ecName"
              rules={{
                required: "Campo obrigatório",
              }}
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <ValidationInput
                  onChange={onChange}
                  value={value}
                  placeholder="Nome do comércio"
                  error={errors.ecName}
                />
              )}
            />

            <Checkbox
              value={sameDoc.toString()}
              onChange={handleToggleSameDoc}
              size="md"
              aria-label="Aceito os termos e condições"
              flexDirection="row"
              marginTop={16}
              marginBottom={24}
            >
              <CheckboxIndicator
                borderColor="$purple600"
                backgroundColor={sameDoc ? "$purple600" : "$white"}
                mr="$2"
              >
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel fontSize={14} flexWrap="wrap">
                Usar os dados da empresa principal?
              </CheckboxLabel>
            </Checkbox>

            <Controller
              control={acqControl}
              name="acqDoc"
              rules={{
                required: "Campo obrigatório",
              }}
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <ValidationInput
                  value={value}
                  keyBoardType="number-pad"
                  onChange={(val) => onChange(formatDocument(val))}
                  placeholder="Documento da maquininha"
                  error={errors.acqDoc}
                />
              )}
            />

            <Controller
              control={acqControl}
              name="acqName"
              rules={{
                required: "Campo obrigatório",
              }}
              render={({
                field: { value, onChange },
                formState: { errors },
              }) => (
                <ValidationInput
                  value={value}
                  onChange={onChange}
                  placeholder="Nome da maquininha"
                  error={errors.acqName}
                />
              )}
            />
          </View>
        </ModalBody>
        <ModalFooter>
          <Button
            onPress={onClose}
            backgroundColor="$coolGray300"
            size="sm"
            marginRight={16}
          >
            <Paragraph>Fechar</Paragraph>
          </Button>
          <Button
            onPress={handleSubmit(handleSave)}
            backgroundColor="$purple600"
            size="sm"
          >
            <Paragraph variant="white">Salvar</Paragraph>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
