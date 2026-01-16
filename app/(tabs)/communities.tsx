import { Text, View, StyleSheet } from "react-native";
export default function Communities() {
  return (
    <View style={styles.container}>
      <Text style={styles.textElement}>Communities Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textElement: {
    fontSize: 50,
    fontWeight: "400",
    color: "red",
    alignItems: "center",
  },
});
