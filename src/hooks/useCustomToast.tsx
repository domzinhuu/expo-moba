import { useToast, Toast, ToastDescription } from "@gluestack-ui/themed"
import { theme } from "@theme/base"

export function useCustomToast() {
  const toast = useToast()

  const showSuccess = (description?: string) => {
    return toast.show({
      render: () => (
        <CustomToast
          bg={theme.colors.secondary[500]}
          description={description}
        />
      ),
      placement: "bottom",
    })
  }

  const showError = (description: string) => {
    return toast.show({
      render: () => (
        <CustomToast bg={theme.colors.danger[500]} description={description} />
      ),
      placement: "bottom",
    })
  }

  const showInfo = (description?: string) => {
    return toast.show({
      render: () => (
        <CustomToast bg={theme.colors.primary[300]} description={description} />
      ),
      placement: "bottom",
    })
  }

  return {
    showError,
    showInfo,
    showSuccess,
  }
}

interface CustomToastProps {
  bg: string
  description?: string
}
function CustomToast({ bg, description }: CustomToastProps) {
  return (
    <Toast style={{ backgroundColor: bg, flexDirection: "column" }}>
      <ToastDescription color={theme.colors.white[500]}>
        {description}
      </ToastDescription>
    </Toast>
  )
}
