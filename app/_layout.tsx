import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

// export const unstable_settings = {
//   anchor: "(tabs)",
// };

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerBackTitle: "Back" }}>
        {/* <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
       <Stack.Screen
          name='modal'
          options={{ presentation: "modal", title: "Modal" }}
        /> */}
        <Stack.Screen
          name='index'
          options={{
            headerShown: true,
            title: "Home Page",
            headerStyle: { backgroundColor: "lime" },
            // headerLeft: () => <Text>Left</Text>,
            // headerRight: () => <Text>Right</Text>,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name='abcd'
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "red" },
            title: "First Page",
            headerBackButtonDisplayMode: "minimal",
            // headerBackVisible: false,
            // headerBackTitle: "Back",
            // headerLeft: () => (
            //   <Pressable onPress={() => console.log("Header left pressed in")}>
            //     <Text>Left</Text>
            //   </Pressable>
            // ),
            // headerRight: () => <Text>Right</Text>,
          }}
        />
        <Stack.Screen
          name='efgh'
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "blue" },
            title: "Second Page",
            // headerLeft: () => <Text>Left</Text>,
            // headerRight: () => <Text>Right</Text>,
          }}
        />
        <Stack.Screen
          name='ijkl'
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "green" },
            // title: "Third Page",
            // headerLeft: () => <Text>Left</Text>,
            // headerRight: () => <Text>Right</Text>,
          }}
        />
      </Stack>
      <StatusBar style='auto' />
    </ThemeProvider>
  );
}
