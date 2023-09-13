import { Center, Spinner } from "@gluestack-ui/themed";

export function Loading() {
  return (
    <Center flex={1} bg="$primary900">
      <Spinner  color="$secondary500"/>
    </Center>
  );
}
