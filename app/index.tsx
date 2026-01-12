import { Link } from "expo-router";
import { Text, View } from "react-native";
const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is the index page</Text>
      <Link href={"/abcd"}>
        <Text>ABCD</Text>
      </Link>
      <Link href={"/efgh"}>
        <Text>EFGH</Text>
      </Link>
      <Link href={"/ijkl"}>
        <Text>IJKL</Text>
      </Link>
    </View>
  );
};
export default Index;
