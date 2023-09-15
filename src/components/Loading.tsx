import { Center, Spinner } from "@gluestack-ui/themed";
import { theme } from "@theme/base";

export function Loading() {
  return (
    <Center flex={1}>
      <Spinner size={48} color={theme.colors.primary[500]} />
    </Center>
  );
}
