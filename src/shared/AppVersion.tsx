import { Text } from "react-native"
import { version } from "../../package.json"
export function AppVersion() {
  return <Text style={{ fontSize: 10 }}>v{version}</Text>
}
