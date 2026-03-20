import { FlatList, Pressable, Text, View } from "react-native";
import { styles } from "./GoalsList.styles";
import { useState } from "react";

export default function GoalsList({ goals, setGoals }) {
  const [pressedItem, setPressedItem] = useState(null);

  const deleteGoal = (deleteItem) => {
    setGoals(goals.filter((goal) => goal.key !== deleteItem.key));
  };

  const renderGoal = ({ item }) => (
    <View style={[styles.goalItem, pressedItem === item.key && styles.goalItemPressed]}>
      <Pressable
        android_ripple={{ color: "#f0f0f0" }}
        onPress={() => deleteGoal(item)}
        onPressIn={() => setPressedItem(item.key)}
        onPressOut={() => setPressedItem(null)}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );

  const renderEmptyList = () => (
    <Text style={styles.emptyText}>No goals yet. Add one to get started!</Text>
  );

  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goals}
        renderItem={renderGoal}
        keyExtractor={(item) => item.key}
        ListEmptyComponent={renderEmptyList}
        scrollEnabled={goals.length > 0}
      />
    </View>
  );
}
