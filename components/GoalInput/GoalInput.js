import { Button, TextInput, View } from "react-native";
import { styles } from "./GoalInput.styles";
import { useState } from "react";

export default function GoalInput({ onPress }) {
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
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter text here"
        onChangeText={handleTextInputChange}
        value={inputText}
      />
      <Button title="Submit" onPress={() => handleInputText(inputText)} />
    </View>
  );
}
