import AsyncStorage from "@react-native-async-storage/async-storage";
import { SESSION_REFRESH_TOKEN, SESSION_TOKEN } from "./storageConfig";

export async function storageSessionSave(token: string, refresh?: string) {
  await AsyncStorage.setItem(SESSION_TOKEN, token);

  if (refresh) {
    await AsyncStorage.setItem(SESSION_REFRESH_TOKEN, refresh);
  }
}

export async function storageSessionGet(): Promise<any> {
  const token = await AsyncStorage.getItem(SESSION_TOKEN);
  const refresh = await AsyncStorage.getItem(SESSION_REFRESH_TOKEN);

  return {
    token,
    refresh,
  };
}

export async function storageSessionRemove() {
  await AsyncStorage.removeItem(SESSION_TOKEN);
  await AsyncStorage.removeItem(SESSION_REFRESH_TOKEN);
}
