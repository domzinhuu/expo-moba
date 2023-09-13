import { Center, Spinner, config } from "@gluestack-ui/themed";

export function Loading() {
  return (
    <Center flex={1}>
      <Spinner  />
    </Center>
  );
}
