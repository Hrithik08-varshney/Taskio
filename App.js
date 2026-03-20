import { View, TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import GoalInput from "./components/GoalInput";
import GoalsList from "./components/GoalsList";
import { styles } from "./App.styles";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  function handleButtonPress(inputText) {
    setGoals((prevGoals) => [
      ...prevGoals,
      { key: Date.now() + Math.random().toString(), text: inputText },
    ]);
    setIsModalVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.addButton, isPressed && styles.addButtonPressed]}
          onPress={() => setIsModalVisible(true)}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          activeOpacity={0.8}
        >
          <Text style={styles.addButtonText}>+ Add New Goal</Text>
        </TouchableOpacity>
        <GoalInput
          onPress={handleButtonPress}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
        <GoalsList goals={goals} setGoals={setGoals} />
      </View>
    </>
  );
}
