import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
    marginTop: 16,
  },
  goalItem: {
    marginVertical: 8,
    marginHorizontal: 0,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    borderLeftWidth: 5,
    borderLeftColor: "#6c5ce7",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    overflow: "hidden",
  },
  goalItemPressed: {
    backgroundColor: "#f5f5f5",
  },
  goalText: {
    color: "#333",
    padding: 16,
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.3,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 32,
    fontSize: 16,
    color: "#999",
    fontStyle: "italic",
  },
});
