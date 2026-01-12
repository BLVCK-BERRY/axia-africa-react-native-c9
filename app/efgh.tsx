import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const EFGH = () => {
  return (
    <SafeAreaView>
      <Link href={"/ijkl"}>
        <Text>Takes you to IJKL</Text>
      </Link>
    </SafeAreaView>
  );
};
export default EFGH;
