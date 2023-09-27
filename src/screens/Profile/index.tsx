import { View } from "@gluestack-ui/themed";
import { Title } from "../../components/Title";
import { styles } from "./styles";
import {
  EditFormDataKeys,
  ProfileContext,
  ProfileProvider,
} from "@contexts/ProfileContext";
import { useAuth } from "@hooks/useAuth";
import { Paragraph } from "@components/Paragraph";
import { formatDocument, formatToCep, maskToPhone } from "@utils/formatters";
import { KeyboardTypeOptions, ScrollView, ScrollViewBase } from "react-native";
import { useContext } from "react";
import { Controller } from "react-hook-form";
import { ValidationInput } from "@shared/ValidationInput";
import { Picker } from "@react-native-picker/picker";
import { theme } from "@theme/base";
import { Loading } from "@components/Loading";

const revenueOptions = [
  "R$ 0,01 a R$ 5.000,00",
  "R$ 5.001,00 a R$ 20.000,00",
  "R$ 20.000,00 a R$ 100.000,00",
  "R$ 100.000,00 a R$ 1.000.000,00",
  "Mais de R$ 1.000.000,00",
];

export function ProfileScreen() {
  const { user } = useAuth();
  const { isLoadingData } = useContext(ProfileContext);

  if(isLoadingData){
    return  <Loading /> 
  }
  return (
    <ScrollView>
      
      <View style={styles.container}>
        <View style={styles.categoryHeader}>
          <Title variant="primary" size="md">
            Dados da empresa
          </Title>
        </View>
        <View style={styles.formContent}>
          <FormControl
            fieldname="doc"
            label="Documento:"
            keyboardType="number-pad"
            content={formatDocument(user?.cnpj)}
          />

          <FormControl
            fieldname="companyName"
            label="Nome Fantasia:"
            content={user?.companyName}
          />

          <FormControl
            fieldname="zipcode"
            label="Cep:"
            keyboardType="number-pad"
            content={formatToCep(user?.ecAddress.zipcode)}
          />

          <FormControl
            fieldname="street"
            label="Endereço:"
            content={user?.ecAddress.street}
          />

          <FormControl
            fieldname="number"
            label="Número"
            keyboardType="number-pad"
            content={user?.ecAddress.number}
          />

          <FormControl
            fieldname="district"
            label="Bairro:"
            content={user?.ecAddress.district}
          />

          <FormControl
            fieldname="city"
            label="Cidade:"
            content={user?.ecAddress.city}
          />

          <FormControl
            fieldname="state"
            label="Estado:"
            content={user?.ecAddress.state}
          />

          <FormControl
            fieldname="info"
            label="Referência"
            content={user?.ecAddress.info}
          />

          <FormControl
            fieldname="phone"
            label="Telefone"
            keyboardType="phone-pad"
            content={maskToPhone(user?.ecPhone)}
          />

          <FormControl
            fieldname="revenue"
            label="Faturamento"
            content={user?.revenue}
          />
        </View>
        <View style={styles.categoryHeader}>
          <Title variant="primary" size="md">
            Dados do Representante
          </Title>
        </View>
        <View style={styles.formContent}>
          <FormControl
            fieldname="email"
            label="Email"
            keyboardType="email-address"
            content={user?.email_rep}
          />

          <FormControl fieldname="name" label="Nome" content={user?.reprName} />

          <FormControl
            fieldname="representativePhone"
            label="Telefone"
            keyboardType="phone-pad"
            content={maskToPhone(user?.clientPhone)}
          />

          <FormControl
            fieldname="representativeDoc"
            label="Documento"
            keyboardType="number-pad"
            content={formatDocument(user?.reprDoc)}
          />
        </View>
      </View>
    </ScrollView>
  );
}

interface FormControlProps {
  fieldname: EditFormDataKeys;
  label: string;
  content?: string;
  keyboardType?: KeyboardTypeOptions;
}
function FormControl({
  label,
  content = "",
  fieldname,
  keyboardType,
}: FormControlProps) {
  const { isEditing, control } = useContext(ProfileContext);
  if (isEditing && fieldname !== "revenue") {
    return (
      <Controller
        control={control}
        name={fieldname}
        defaultValue={content}
        render={({ field: { value, onChange }, formState: { errors } }) => {
          return (
            <>
              <Paragraph x={8}>{label}</Paragraph>
              <ValidationInput
                value={value}
                keyBoardType={keyboardType}
                onChange={onChange}
                placeholder={label}
                error={errors[fieldname]}
              />
            </>
          );
        }}
      />
    );
  }

  if (isEditing && fieldname === "revenue") {
    return (
      <Controller
        control={control}
        name="revenue"
        render={({ field: { onChange, value }, formState: { errors } }) => (
          <View
            style={{
              marginVertical: 16,
              borderRadius: 6,
              borderBottomWidth: 0.8,
              borderBottomColor: "#999",
            }}
          >
            <Paragraph x={16}>{label}</Paragraph>
            <Picker selectedValue={value} onValueChange={onChange}>
              {revenueOptions.map((opt) => (
                <Picker.Item key={opt} label={opt} value={opt} />
              ))}
            </Picker>
          </View>
        )}
      />
    );
  }

  return (
    <View style={styles.formRow}>
      <Paragraph size="md">{label}</Paragraph>
      <Paragraph>{content}</Paragraph>
    </View>
  );
}
