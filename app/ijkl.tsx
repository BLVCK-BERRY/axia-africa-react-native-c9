import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const EFGH = () => {
  return (
    <SafeAreaView>
      <Link href={"/abcd"}>
        <Text>Takes you to ABCD</Text>
      </Link>
      <Link href={"/efgh"}>
        <Text>Takes you to EFGH</Text>
      </Link>
    </SafeAreaView>
  );
};
export default EFGH;
