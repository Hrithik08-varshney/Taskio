import { View } from "react-native";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalsList from "./components/GoalsList";
import { styles } from "./App.styles";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [goals, setGoals] = useState([]);

  function handleButtonPress() {
    setGoals((prevGoals) => [
      ...prevGoals,
      { key: Date.now() + Math.random().toString(), text: inputText },
    ]);
    setInputText("");
  }

  function handleTextInputChange(text) {
    console.log("Text input changed:", text);
    setInputText(text);
  }

  return (
    <View style={styles.container}>
      <GoalInput
        inputText={inputText}
        onChangeText={handleTextInputChange}
        onPress={handleButtonPress}
      />
      <GoalsList goals={goals} />
    </View>
  );
}
