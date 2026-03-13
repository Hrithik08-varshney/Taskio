import { FlatList, Text, View } from "react-native";
import { styles } from "./GoalsList.styles";

export default function GoalsList({ goals }) {
  const renderGoal = ({ item }) => (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{item.text}</Text>
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
