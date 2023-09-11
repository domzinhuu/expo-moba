import { View } from "react-native";
import Card from "../../shared/Card";
import { CustomInput } from "../CustomInput";
import { Picker } from "@react-native-picker/picker";
import { useContext, useState } from "react";
import { createUserContext } from "../../contexts/CreateUserContext";
import { CreateUserCompanyData } from "../../models/user";
import { theme } from "../../theme/base";

export function ComerceForm() {
  const { companyData, onSetCompanyData } = useContext(createUserContext);

  function handleChangeDoc(value: any) {
    const data: CreateUserCompanyData = {
      ...companyData,
      doc: value,
    };
    onSetCompanyData(data);
  }

  function handleChangeCompanyName(value: any) {
    const data: CreateUserCompanyData = {
      ...companyData,
      companyName: value,
    };
    onSetCompanyData(data);
  }

  function handleChangeCep(value: any) {
    const data: CreateUserCompanyData = {
      ...companyData,
      ecAddress: {
        ...companyData.ecAddress,
        zipcode: value,
      },
    };
    onSetCompanyData(data);
  }

  function handleChangeInfo(value: any) {
    const data: CreateUserCompanyData = {
      ...companyData,
      ecAddress: {
        ...companyData.ecAddress,
        info: value,
      },
    };
    onSetCompanyData(data);
  }

  function handleChangeNumber(value: any) {
    const data: CreateUserCompanyData = {
      ...companyData,
      ecAddress: {
        ...companyData.ecAddress,
        number: value,
      },
    };
    onSetCompanyData(data);
  }

  function handleChangeDistric(value: any) {
    const data: CreateUserCompanyData = {
      ...companyData,
      ecAddress: {
        ...companyData.ecAddress,
        district: value,
      },
    };
    onSetCompanyData(data);
  }

  function handleChangeState(value: any) {
    const data: CreateUserCompanyData = {
      ...companyData,
      ecAddress: {
        ...companyData.ecAddress,
        state: value,
      },
    };

    onSetCompanyData(data);
  }

  function handleChangeCity(value: any) {
    const data: CreateUserCompanyData = {
      ...companyData,
      ecAddress: {
        ...companyData.ecAddress,
        city: value,
      },
    };

    onSetCompanyData(data);
  }

  function handleChangeStreet(value: any) {
    const data: CreateUserCompanyData = {
      ...companyData,
      ecAddress: {
        ...companyData.ecAddress,
        street: value,
      },
    };

    onSetCompanyData(data);
  }

  function handleChangePhone(value: any) {
    const data: CreateUserCompanyData = {
      ...companyData,
      phone: value,
    };

    onSetCompanyData(data);
  }

  function handleChangeRevenue(value: any) {
    const data: CreateUserCompanyData = {
      ...companyData,
      revenue: value,
    };
    onSetCompanyData(data);
  }

  return (
    <View>
      <CustomInput
        placeholder="Documento"
        onUpdate={handleChangeDoc}
        value={companyData.doc}
        keyBoardType="numeric"
      />

      <CustomInput
        placeholder="Nome Fantasia"
        onUpdate={handleChangeCompanyName}
        value={companyData.companyName}
      />

      <CustomInput
        placeholder="Cep"
        onUpdate={handleChangeCep}
        value={companyData.ecAddress.zipcode}
        keyBoardType="numeric"
      />
      <CustomInput
        placeholder="Endereço"
        onUpdate={handleChangeStreet}
        value={companyData.ecAddress.street}
      />

      <View style={{ alignItems: "center", flexDirection: "row", gap: 4 }}>
        <CustomInput
          placeholder="Complemento"
          onUpdate={handleChangeInfo}
          value={companyData.ecAddress.info}
        />
        <CustomInput
          placeholder="Número"
          onUpdate={handleChangeNumber}
          value={companyData.ecAddress.number}
          keyBoardType="numeric"
        />
      </View>

      <View style={{ alignItems: "center", flexDirection: "row", gap: 4 }}>
        <CustomInput
          placeholder="Bairro"
          onUpdate={handleChangeDistric}
          value={companyData.ecAddress.district}
        />
        <CustomInput
          placeholder="Cidade"
          onUpdate={handleChangeCity}
          value={companyData.ecAddress.city}
        />
      </View>

      <CustomInput
        placeholder="Estado"
        onUpdate={handleChangeState}
        value={companyData.ecAddress.state}
      />
      <CustomInput
        placeholder="Telefone"
        onUpdate={handleChangePhone}
        value={companyData.phone}
        keyBoardType="phone-pad"
      />
      <View
        style={{ backgroundColor: theme.colors.white[500], borderRadius: 6 }}
      >
        <Picker
          selectedValue={companyData.revenue}
          onValueChange={(itemValue) => handleChangeRevenue(itemValue)}
        >
          <Picker.Item
            label="R$ 0,01 a R$ 5.000,00"
            value="R$ 0,01 a R$ 5.000,00 "
          />
          <Picker.Item
            label="R$ 5.001,00 a R$ 20.000,00"
            value="R$ 5.001,00 a R$ 20.000,00"
          />
          <Picker.Item
            label="R$ 20.000,00 a R$ 100.000,00"
            value="R$ 20.000,00 a R$ 100.000,00"
          />
          <Picker.Item
            label="R$ 100.000,00 a R$ 1.000.000,00"
            value="R$ 100.000,00 a R$ 1.000.000,00"
          />
          <Picker.Item
            label="Mais de R$ 1.000.000,00"
            value="Mais de R$ 1.000.000,00"
          />
        </Picker>
      </View>
    </View>
  );
}
