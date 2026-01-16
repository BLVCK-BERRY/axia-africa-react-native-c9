import { HapticTab } from "@/components/haptic-tab";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#25D366",
        tabBarInactiveTintColor: "black",
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Chats",
          // tabBarBadge: 99,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='message' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='updates'
        options={{
          title: "Updates",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='update' size={24} color={color} />
            // <IconSymbol size={28} name='paperplane.fill' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='communities'
        options={{
          title: "Communities",
          tabBarIcon: ({ color }) => (
            <Ionicons name='people' size={24} color={color} />
            // <IconSymbol size={28} name='paperplane.fill' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='calls'
        options={{
          title: "Calls",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='call' size={24} color={color} />
            // <IconSymbol size={28} name='paperplane.fill' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
