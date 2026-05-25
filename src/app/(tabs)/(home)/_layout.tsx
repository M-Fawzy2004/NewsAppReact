import React from "react";
import { TouchableOpacity } from "react-native";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

function PersonCircleButton() {
  return (
    <TouchableOpacity
      style={{
        width: 35,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons name="person-circle" size={25} color="#000" />
    </TouchableOpacity>
  );
}

function NotificationButton() {
  return (
    <TouchableOpacity
      style={{
        width: 35,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons name="notifications-outline" size={25} color="#000" />
    </TouchableOpacity>
  );
}

export default function HomeStackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "News App",
          headerTransparent: true,
          headerLeft: () => <PersonCircleButton />,
          headerRight: () => <NotificationButton />,
        }}
      />
    </Stack>
  );
}
