import { Paragraph } from "@components/Paragraph"
import { View } from "@gluestack-ui/themed"

type ErrorMessgeProps = {
  show?: boolean
  message?: string
}

export function ErrorMessage({ show = false, message = "" }: ErrorMessgeProps) {
  if (!show) {
    return null
  }
  return (
    <View style={{ flexDirection: "row", justifyContent: "flex-end", position:"absolute",bottom:-10, right:0 }}>
      <Paragraph size="xs" variant="danger">{message}</Paragraph>
    </View>
  )
}
