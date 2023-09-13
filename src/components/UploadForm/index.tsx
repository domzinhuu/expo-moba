import React, { useEffect, useState } from "react";
import {
  View,
  Button,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Paragraph } from "../Paragraph";
import { theme }  from "src/theme/base"
import { Ionicons } from "@expo/vector-icons";

function UploadForm() {
  const [imagemFrente, setImagemFrente] = useState<string | null>(null);
  const [imagemVerso, setImagemVerso] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert(
            "Desculpe, nós precisamos de permissões da biblioteca de mídia para fazer isso funcionar!"
          );
        }
      }
    })();
  }, []);

  const selecionarImagem = async (
    setImagem: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.uploadSection}>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => selecionarImagem(setImagemFrente)}
        >
          <Ionicons
            size={32}
            name="camera-outline"
            color={theme.colors.white[500]}
          />
          <Paragraph variant="white" size="md">
            Frente do Documento
          </Paragraph>
        </TouchableOpacity>
        {imagemFrente && (
          <Image source={{ uri: imagemFrente }} style={styles.imagePreview} />
        )}
      </View>
      <View style={styles.uploadSection}>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => selecionarImagem(setImagemVerso)}
        >
          <Ionicons
            size={32}
            name="camera-reverse"
            color={theme.colors.white[500]}
          />
          <Paragraph variant="white" size="md">
            Upload Verso do Documento
          </Paragraph>
        </TouchableOpacity>
        {imagemVerso && (
          <Image source={{ uri: imagemVerso }} style={styles.imagePreview} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  uploadSection: {
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: theme.colors.primary[300],
    borderRadius: 8,
    padding: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap:16
  },
  imagePreview: {
    marginTop: 10,
    width: 200,
    height: 200,
    alignSelf: "center",
  },
});
export default UploadForm;
