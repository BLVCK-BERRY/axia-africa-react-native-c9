import { StyleSheet, Text, View } from "react-native";
export default function Updates() {
  return (
    <View style={styles.container}>
      <Text style={styles.textElement}>Updates Screen</Text>
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
