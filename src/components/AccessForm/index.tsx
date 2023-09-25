import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useContext, useState } from "react"
import { CreateUserContext } from "../../contexts/CreateUserContext"
import { Controller } from "react-hook-form"
import { ValidationInput } from "@shared/ValidationInput"
import { validatePassword } from "@utils/validate.functions"
import {
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@gluestack-ui/themed"
import TermsAndPolicies from "@shared/TermsAndPolicies"
import { Paragraph } from "@components/Paragraph"

export function AccessForm() {
  const { control, getValues } = useContext(CreateUserContext)
  const [isTermVisible, setIsTermVIsible] = useState(false)

  function openPDF() {
    setIsTermVIsible(true)
  }

  function closePDF() {
    setIsTermVIsible(false)
  }

  return (
    <ScrollView>
      <View>
        <Controller
          control={control}
          name="email_login"
          rules={{
            required: "Campo obrigatório",
          }}
          render={({ field: { value, onChange }, formState: { errors } }) => (
            <ValidationInput
              value={value}
              onChange={onChange}
              keyBoardType="email-address"
              placeholder="Email de login"
              error={errors.email_login}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{
            required: "Campo obrigatório",
            validate: {
              pattern: validatePassword,
            },
          }}
          render={({ field: { value, onChange }, formState: { errors } }) => (
            <ValidationInput
              value={value}
              onChange={onChange}
              placeholder="Senha"
              isPassword={true}
              error={errors.password}
            />
          )}
        />

        <Controller
          control={control}
          name="passwordConfirm"
          rules={{
            required: "Campo obrigatório",
            validate: (value: string) => {
              if (value !== getValues("password")) {
                return "A senha informada é diferente  da senha digitada acima"
              }
              return true
            },
          }}
          render={({ field: { value, onChange }, formState: { errors } }) => (
            <ValidationInput
              value={value}
              onChange={onChange}
              placeholder="Confirme sua senha"
              isPassword={true}
              error={errors.passwordConfirm}
            />
          )}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 24,
          }}
        >
          <Controller
            control={control}
            name="terms"
            rules={{
              required:
                "Você deve aceitar os termos e condições para prosseguir.",
            }}
            render={({
              field: { value = false, onChange },
              formState: { errors },
            }) => (
              <>
                <Checkbox
                  value={value.toString()}
                  onChange={onChange}
                  size="md"
                  aria-label="Aceito os termos e condições"
                  flexDirection="row"
                >
                  <CheckboxIndicator
                    backgroundColor={value ? "$purple600" : "$white"}
                    borderColor="$purple600"
                    mr="$2"
                  >
                    <CheckboxIcon  as={CheckIcon} />
                  </CheckboxIndicator>

                  <CheckboxLabel fontSize={14} flexWrap="wrap">
                    Aceito os termos e condição
                  </CheckboxLabel>
                </Checkbox>
                <View>
                  <Paragraph variant="danger">
                    {errors.terms?.message}
                  </Paragraph>
                </View>
              </>
            )}
          />

          <TouchableOpacity onPress={openPDF} style={{ marginTop: 16 }}>
            <Text
              style={{
                marginLeft: 28,
                fontSize: 12,
                textDecorationLine: "underline",
              }}
            >
              Clique aqui para ler os termos
            </Text>
          </TouchableOpacity>
        </View>

        <TermsAndPolicies
          isVisible={isTermVisible}
          onClose={closePDF}
          pdfUrl={"https://app.nodeb.com.br/docs/polices_v3.pdf"}
        />
      </View>
    </ScrollView>
  )
}
