import {
  useToast,
  Toast,
  ToastTitle,
  ToastDescription,
} from "@gluestack-ui/themed";
import { theme }  from "src/theme/base"

export function useCustomToast() {
  const toast = useToast();

  const showSuccess = (title: string, description?: string) => {
    return toast.show({
      render: () => (
        <CustomToast
          bg={theme.colors.secondary[500]}
          title={title}
          description={description}
        />
      ),
      placement: "bottom",
    });
  };

  const showError = (title: string, description?: string) => {
    return toast.show({
      render: () => (
        <CustomToast
          bg={theme.colors.danger[500]}
          title={title}
          description={description}
        />
      ),
      placement: "bottom",
    });
  };

  const showInfo = (title: string, description?: string) => {
    return toast.show({
      render: () => (
        <CustomToast
          bg={theme.colors.primary[300]}
          title={title}
          description={description}
        />
      ),
      placement: "bottom",
    });
  };

  return {
    showError,
    showInfo,
    showSuccess,
  };
}

interface CustomToastProps {
  bg: string;
  title: string;
  description?: string;
}
function CustomToast({ bg, title, description }: CustomToastProps) {
  return (
    <Toast style={{ backgroundColor: bg }}>
      <ToastTitle color={theme.colors.white[500]}>{title}</ToastTitle>
      <ToastDescription color={theme.colors.white[500]}>
        {description}
      </ToastDescription>
    </Toast>
  );
}
