import { useAuth } from "@hooks/useAuth";
import { useCustomToast } from "@hooks/useCustomToast";
import { CreateUserEntity } from "@models/createUser";
import { api } from "@services/api";
import { AppError } from "@utils/AppErrors";
import { PropsWithChildren, createContext, useState } from "react";
import { Control, useForm } from "react-hook-form";

export type ProfileContextProps = {
  isEditing: boolean;
  isLoadingData: boolean;
  control: Control<EditFormDataProps>;
  handleSubmit: any;
  onToggleEdit: (data?: EditFormDataProps) => void;
};
export const ProfileContext = createContext<ProfileContextProps>(
  {} as ProfileContextProps
);

export function ProfileProvider({ children }: PropsWithChildren) {
  const [isEditing, setIsEditing] = useState(false);
  const { user, updaetUser } = useAuth();
  const { control, handleSubmit } = useForm<EditFormDataProps>();
  const [isLoadingData, setIsLoadingData] = useState(false);
  const toast = useCustomToast();

  const handleToggleIsEditing = async (data?: EditFormDataProps) => {
    if (!isEditing || !data) {
      setIsEditing((state) => !state);
      return;
    }

    setIsLoadingData(true);
    const updateUser: CreateUserEntity = {
      ec: {
        companyName: data.companyName,
        combo: user!.combo,
        doc: user!.cnpj,
        phone: data.phone,
        revenue: data.revenue,
        ecAddress: {
          city: data.city,
          district: data.district,
          info: data.info,
          number: data.number,
          state: data.state,
          street: data.street,
          zipcode: data.zipcode,
        },
        representative: {
          doc: data.representativeDoc,
          email: data.email,
          name: data.name,
          phone: data.representativePhone,
        },
      },
    };

    try {
      const response: any = await api.put(
        `/updtuser/${user!.clientId}`,
        updateUser
      );
      await updaetUser(response.currentClient);
    } catch (error) {
      const isAppError = AppError.isAppError(error);
      const description = isAppError
        ? (error as AppError).message
        : "Não foi possivel realizar o login. Tente novamente mais tarde.";

      toast.showError(description);
    } finally {
      setIsLoadingData(false);
    }

    toast.showSuccess("Dados atualizados com sucesso!");
    setIsEditing((state) => !state);
  };

  return (
    <ProfileContext.Provider
      value={{
        isEditing,
        isLoadingData,
        control,
        handleSubmit,
        onToggleEdit: handleToggleIsEditing,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

type EditFormDataProps = {
  city: string;
  district: string;
  info: string;
  number: string;
  state: string;
  street: string;
  zipcode: string;
  doc: string;
  companyName: string;
  phone: string;
  revenue: string;
  representativeDoc: string;
  email: string;
  representativePhone: string;
  name: string;
};

export type EditFormDataKeys = keyof EditFormDataProps;
