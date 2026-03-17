import { View } from "react-native";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalsList from "./components/GoalsList";
import { styles } from "./App.styles";

export default function App() {
  const [goals, setGoals] = useState([]);

  function handleButtonPress(inputText) {
    setGoals((prevGoals) => [
      ...prevGoals,
      { key: Date.now() + Math.random().toString(), text: inputText },
    ]);
  }

  return (
    <View style={styles.container}>
      <GoalInput
        onPress={handleButtonPress}
      />
      <GoalsList goals={goals} setGoals={setGoals} />
    </View>
  );
}
