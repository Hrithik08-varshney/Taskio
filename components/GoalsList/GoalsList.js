import { FlatList, Pressable, Text, View } from "react-native";
import { styles } from "./GoalsList.styles";

export default function GoalsList({ goals, setGoals }) {
  const deleteGoal = (deleteItem) => {
    setGoals(goals.filter((goal) => goal.key !== deleteItem.key));
  };

  const renderGoal = ({ item }) => (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={() => deleteGoal(item)}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goals}
        renderItem={renderGoal}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}
