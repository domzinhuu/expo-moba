import React, { useContext, useEffect, useState } from "react"
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
} from "react-native"
import * as ImagePicker from "expo-image-picker"
import { Paragraph } from "../Paragraph"
import { theme } from "@theme/base"
import { Ionicons } from "@expo/vector-icons"
import { Loading } from "@components/Loading"
import * as FileSystem from "expo-file-system"
import { CreateUserContext } from "@contexts/CreateUserContext"

function UploadForm() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  const [imagemFrente, setImagemFrente] = useState<string | null>(null)
  const [imagemVerso, setImagemVerso] = useState<string | null>(null)
  const { companyData, onSetImageUpload } = useContext(CreateUserContext)

  const selecionarImagem = async (
    position: "front" | "back",
    setImagem: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    setPhotoIsLoading(true)
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsEditing: true,
      })

      if (result.canceled) {
        return
      }

      const photoSelected = result.assets[0]

      if (photoSelected.uri) {
        const photoInfo = await FileSystem.getInfoAsync(photoSelected.uri)

        if (photoInfo.exists && photoInfo.size / 1024 / 1024 > 5) {
          return Alert.alert(
            "Essa imagem é muito grande. Escolha uma imagem até 5mb"
          )
        }
      }

      const fileExtension = photoSelected.uri.split(".").pop()
      const companyName = companyData.companyName.replaceAll(" ", "")

      const photoFile = {
        name: `${companyName}-${position}-${Date.now()}.${fileExtension}`.toLowerCase(),
        uri: photoSelected.uri,
        type: `${photoSelected.type}/${fileExtension}`,
      } as any

      onSetImageUpload(photoFile, position)
      setImagem(photoSelected.uri)
    } catch (error) {
      console.log(error)
    } finally {
      setPhotoIsLoading(false)
    }
  }

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

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.uploadSection}>
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={() => selecionarImagem("front", setImagemFrente)}
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
          {photoIsLoading && <Loading />}
          {imagemFrente && (
            <Image
              source={{ uri: imagemFrente }}
              style={styles.imagePreview}
              resizeMode="contain"
            />
          )}
        </View>
        <View style={styles.uploadSection}>
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={() => selecionarImagem("back", setImagemVerso)}
          >
            <Ionicons
              size={32}
              name="camera-reverse"
              color={theme.colors.white[500]}
            />
            <Paragraph variant="white" size="md">
              Verso do Documento
            </Paragraph>
          </TouchableOpacity>
          {imagemVerso && (
            <Image
              source={{ uri: imagemVerso }}
              style={styles.imagePreview}
              resizeMode="contain"
            />
          )}
        </View>
      </View>
    </ScrollView>
  )
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
    gap: 16,
  },
  imagePreview: {
    marginTop: 10,
    width: 200,
    height: 200,
    alignSelf: "center",
  },
})
export default UploadForm
