import React from "react";
import { TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

function ArticleBackButton() {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={{
        width: 35,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons name="arrow-back" size={24} color="#000000" />
    </TouchableOpacity>
  );
}

function ArticleHeartButton() {
  const [liked, setLiked] = React.useState(false);
  return (
    <TouchableOpacity
      onPress={() => setLiked((prev) => !prev)}
      style={{
        width: 35,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons
        name={liked ? "heart" : "heart-outline"}
        size={22}
        color="#ff0000"
      />
    </TouchableOpacity>
  );
}

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="article-details"
        options={{
          headerShown: true,
          headerTransparent: true,
          title: "",
          headerLeft: () => <ArticleBackButton />,
          headerRight: () => <ArticleHeartButton />,
        }}
      />
    </Stack>
  );
}
