import { Link } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const ABCD = () => {
  return (
    <SafeAreaView>
      <Link href={"/efgh"}>
        <Text>Takes to EFGH</Text>
      </Link>
      <Link href={"/"}>
        <Text>Go back home</Text>
      </Link>
    </SafeAreaView>
  );
};
export default ABCD;
