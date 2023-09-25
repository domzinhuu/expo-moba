import { Ionicons } from "@expo/vector-icons"
import { theme } from "@theme/base"
import React from "react"
import { Modal, View, TouchableOpacity, Text } from "react-native"
import { WebView } from "react-native-webview"

interface TermsAndPoliciesProps {
  isVisible: boolean
  onClose: () => void
  pdfUrl: any
}

const TermsAndPolicies = ({
  isVisible,
  onClose,
  pdfUrl,
}: TermsAndPoliciesProps) => {
  const googleDocsUrl = `https://docs.google.com/viewer?url=${pdfUrl}`

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={{ flex: 1, backgroundColor: theme.colors.primary[500] }}>
        <TouchableOpacity
          style={{
            padding: 8,
            margin: 8,
            alignSelf: "flex-end",
            borderRadius: 6,
          }}
          onPress={onClose}
        >
          <Ionicons name="close" size={20} color={theme.colors.white[500]} />
        </TouchableOpacity>
        <WebView source={{ uri: googleDocsUrl }} />
      </View>
    </Modal>
  )
}

export default TermsAndPolicies
