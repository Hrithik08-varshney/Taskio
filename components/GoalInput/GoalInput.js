import {
  Button,
  Modal,
  TextInput,
  View,
  SafeAreaView,
  Text,
  Image,
} from "react-native";
import { styles } from "./GoalInput.styles";
import { useState } from "react";

const goalsIcon = require("../../assets/GoalsIcon.png");

export default function GoalInput({
  onPress,
  isModalVisible,
  setIsModalVisible,
}) {
  const [inputText, setInputText] = useState("");

  function handleTextInputChange(text) {
    console.log("Text input changed:", text);
    setInputText(text);
  }

  const handleInputText = (inputText) => {
    onPress(inputText);
    setInputText("");
  };

  return (
    <Modal visible={isModalVisible} animationType="fade" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.inputContainer}>
          <Image
            source={goalsIcon}
            style={styles.goalImage}
          />
          <Text style={styles.modalTitle}>Add Your Goal</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter text here"
            onChangeText={handleTextInputChange}
            value={inputText}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Add Goal"
              onPress={() => handleInputText(inputText)}
            />
            <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
