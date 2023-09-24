import { View } from "react-native"
import { Input } from "../CustomInput"
import { Picker } from "@react-native-picker/picker"
import { useContext } from "react"
import { CreateUserContext } from "../../contexts/CreateUserContext"
import { theme } from "@theme/base"
import { Controller } from "react-hook-form"
import { ErrorMessage } from "@shared/ErrorMessage"
import { styles } from "./styles"
import { formatToCep, maskDocument, maskToPhone } from "@utils/formatters"
import { ScrollView } from "@gluestack-ui/themed"

const revenueOptions = [
  "R$ 0,01 a R$ 5.000,00",
  "R$ 5.001,00 a R$ 20.000,00",
  "R$ 20.000,00 a R$ 100.000,00",
  "R$ 100.000,00 a R$ 1.000.000,00",
  "Mais de R$ 1.000.000,00",
]
export function ComerceForm() {
  const { control, execMockStep1 } = useContext(CreateUserContext)

  return (
    <ScrollView>
      <View>
        <Controller
          control={control}
          name="doc"
          rules={{
            required: "Informe o documento",
          }}
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <View style={{ position: "relative" }}>
              <Input
                placeholder="Documento"
                onChangeText={(value) => onChange(maskDocument(value))}
                value={value}
                placeholderTextColor={errors.doc && theme.colors.danger[500]}
                style={errors.doc ? styles.inputError : {}}
                keyboardType="numeric"
              />
              <ErrorMessage show={!!errors.doc} message={errors.doc?.message} />
            </View>
          )}
        />

        <Controller
          control={control}
          name="companyName"
          rules={{
            required: "Informe o nomo da empresa",
          }}
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <View style={{ position: "relative" }}>
              <Input
                placeholder="Nome Fantasia"
                onChangeText={onChange}
                value={value}
                placeholderTextColor={
                  errors.companyName && theme.colors.danger[500]
                }
                style={errors.companyName ? styles.inputError : {}}
              />
              <ErrorMessage
                show={!!errors.companyName}
                message={errors.companyName?.message}
              />
            </View>
          )}
        />

        <Controller
          control={control}
          name="zipcode"
          rules={{
            required: "Informe o cep",
          }}
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <View style={{ position: "relative" }}>
              <Input
                placeholder="Cep"
                onChangeText={(value) => onChange(formatToCep(value))}
                value={value}
                placeholderTextColor={
                  errors.zipcode && theme.colors.danger[500]
                }
                style={errors.zipcode ? styles.inputError : {}}
                keyboardType="numeric"
              />
              <ErrorMessage
                show={!!errors.zipcode}
                message={errors.zipcode?.message}
              />
            </View>
          )}
        />

        <Controller
          control={control}
          name="street"
          rules={{
            required: "Informe o endereço",
          }}
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <View style={{ position: "relative" }}>
              <Input
                placeholder="Endereço"
                onChangeText={onChange}
                value={value}
                placeholderTextColor={errors.street && theme.colors.danger[500]}
                style={errors.street ? styles.inputError : {}}
              />
              <ErrorMessage
                show={!!errors.street}
                message={errors.street?.message}
              />
            </View>
          )}
        />

        <View style={{ alignItems: "center", flexDirection: "row", gap: 4 }}>
          <View style={{ flex: 1 }}>
            <Controller
              control={control}
              name="info"
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => (
                <View style={{ position: "relative" }}>
                  <Input
                    placeholder="Complemento"
                    onChangeText={onChange}
                    value={value}
                    placeholderTextColor={
                      errors.info && theme.colors.danger[500]
                    }
                    style={errors.info ? styles.inputError : {}}
                  />
                  <ErrorMessage
                    show={!!errors.info}
                    message={errors.info?.message}
                  />
                </View>
              )}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Controller
              control={control}
              name="number"
              rules={{
                required: "Informe o número",
              }}
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => (
                <View style={{ position: "relative" }}>
                  <Input
                    placeholder="Número"
                    onChangeText={onChange}
                    value={value}
                    placeholderTextColor={
                      errors.number && theme.colors.danger[500]
                    }
                    style={errors.number ? styles.inputError : {}}
                    keyboardType="numeric"
                  />
                  <ErrorMessage
                    show={!!errors.number}
                    message={errors.number?.message}
                  />
                </View>
              )}
            />
          </View>
        </View>

        <View style={{ alignItems: "center", flexDirection: "row", gap: 4 }}>
          <View style={{ flex: 1 }}>
            <Controller
              control={control}
              name="district"
              rules={{
                required: "Informe o bairro",
              }}
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => (
                <View style={{ position: "relative" }}>
                  <Input
                    placeholder="Bairro"
                    onChangeText={onChange}
                    value={value}
                    placeholderTextColor={
                      errors.district && theme.colors.danger[500]
                    }
                    style={errors.district ? styles.inputError : {}}
                  />
                  <ErrorMessage
                    show={!!errors.district}
                    message={errors.district?.message}
                  />
                </View>
              )}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Controller
              control={control}
              name="city"
              rules={{
                required: "Informe a cidade",
              }}
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => (
                <View style={{ position: "relative" }}>
                  <Input
                    placeholder="Cidade"
                    onChangeText={onChange}
                    value={value}
                    placeholderTextColor={
                      errors.city && theme.colors.danger[500]
                    }
                    style={errors.city ? styles.inputError : {}}
                  />
                  <ErrorMessage
                    show={!!errors.city}
                    message={errors.city?.message}
                  />
                </View>
              )}
            />
          </View>
        </View>

        <Controller
          control={control}
          name="state"
          rules={{
            required: "Informe o estado com 2 caracteres ex:(SP)",
          }}
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <View style={{ position: "relative" }}>
              <Input
                placeholder="Estado"
                onChangeText={onChange}
                value={value}
                placeholderTextColor={errors.state && theme.colors.danger[500]}
                style={errors.state ? styles.inputError : {}}
                maxLength={2}
              />
              <ErrorMessage
                show={!!errors.state}
                message={errors.state?.message}
              />
            </View>
          )}
        />

        <Controller
          control={control}
          name="phone"
          rules={{
            required: "Informe o telefone de contato",
          }}
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <View style={{ position: "relative" }}>
              <Input
                placeholder="Telefone"
                onChangeText={(value) => onChange(maskToPhone(value))}
                value={value}
                placeholderTextColor={errors.phone && theme.colors.danger[500]}
                style={errors.phone ? styles.inputError : {}}
                keyboardType="phone-pad"
              />
              <ErrorMessage
                show={!!errors.phone}
                message={errors.phone?.message}
              />
            </View>
          )}
        />

        <Controller
          control={control}
          name="revenue"
          render={({ field: { onChange, value }, formState: { errors } }) => (
            <View
              style={{
                marginVertical: 16,
                borderRadius: 6,
              }}
            >
              <Picker selectedValue={value} onValueChange={onChange}>
                {revenueOptions.map((opt) => (
                  <Picker.Item key={opt} label={opt} value={opt} />
                ))}
              </Picker>
            </View>
          )}
        />
      </View>
    </ScrollView>
  )
}
