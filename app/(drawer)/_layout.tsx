import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Drawer } from "expo-router/drawer";

const Layout = () => {
  return (
    <Drawer
      screenOptions={{
        drawerHideStatusBarOnOpen: true,
      }}
    >
      <Drawer.Screen
        name='(tabs)'
        options={{
          title: "Tabs",
          headerShown: false,
          drawerIcon: ({ color }) => (
            <MaterialIcons name='message' size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='index'
        options={{
          title: "Chats",
          // tabBarBadge: 99,
          drawerIcon: ({ color }) => (
            <MaterialIcons name='message' size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='updates'
        options={{
          title: "Updates",
          drawerIcon: ({ color }) => (
            <MaterialIcons name='update' size={24} color={color} />
            // <IconSymbol size={28} name='paperplane.fill' color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='communities'
        options={{
          title: "Communities",
          drawerIcon: ({ color }) => (
            <Ionicons name='people' size={24} color={color} />
            // <IconSymbol size={28} name='paperplane.fill' color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='calls'
        options={{
          title: "Calls",
          drawerIcon: ({ color }) => (
            <MaterialIcons name='call' size={24} color={color} />
            // <IconSymbol size={28} name='paperplane.fill' color={color} />
          ),
        }}
      />
    </Drawer>
  );
};
export default Layout;
