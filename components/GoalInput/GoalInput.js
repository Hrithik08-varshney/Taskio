import { Button, TextInput, View } from "react-native";
import { styles } from "./GoalInput.styles";

export default function GoalInput({
  inputText,
  onChangeText,
  onPress,
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter text here"
        onChangeText={onChangeText}
        value={inputText}
      />
      <Button title="Submit" onPress={onPress} />
    </View>
  );
}
