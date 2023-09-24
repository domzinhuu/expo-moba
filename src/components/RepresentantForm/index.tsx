import { View } from "react-native"
import { useContext } from "react"
import { CreateUserContext } from "../../contexts/CreateUserContext"
import { Controller } from "react-hook-form"
import { ValidationInput } from "@shared/ValidationInput"
import { formatDocument, maskToPhone } from "@utils/formatters"
import { ScrollView } from "@gluestack-ui/themed"

export function RepresentantForm() {
  const { control } = useContext(CreateUserContext)

  return (
    <ScrollView>
      <View>
        <Controller
          control={control}
          rules={{
            required: "Campo obrigatório",
          }}
          name="email"
          render={({ field: { value, onChange }, formState: { errors } }) => (
            <ValidationInput
              onChange={onChange}
              placeholder="E-mail do representante"
              keyBoardType="email-address"
              value={value}
              error={errors.email}
            />
          )}
        />

        <Controller
          control={control}
          rules={{
            required: "Campo obrigatório",
          }}
          name="name"
          render={({ field: { value, onChange }, formState: { errors } }) => (
            <ValidationInput
              onChange={onChange}
              placeholder="Nome do representante"
              value={value}
              error={errors.name}
            />
          )}
        />

        <Controller
          control={control}
          rules={{
            required: "Campo obrigatório",
          }}
          name="representativePhone"
          render={({ field: { value, onChange }, formState: { errors } }) => (
            <ValidationInput
              onChange={(val) => onChange(maskToPhone(val))}
              placeholder="Telefone do representante"
              keyBoardType="phone-pad"
              value={value}
              error={errors.representativePhone}
            />
          )}
        />

        <Controller
          control={control}
          rules={{
            required: "Campo obrigatório",
          }}
          name="representativeDoc"
          render={({ field: { value, onChange }, formState: { errors } }) => (
            <ValidationInput
              onChange={(val) => onChange(formatDocument(val))}
              keyBoardType="number-pad"
              placeholder="Documento do representante"
              value={value}
              error={errors.representativeDoc}
            />
          )}
        />
      </View>
    </ScrollView>
  )
}
