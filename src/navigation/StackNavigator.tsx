import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ArticleDetails from "../screens/ArticleDetails/ArticleDetails";
import ScreenNums from "./ScreenNums";

const stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name={ScreenNums.HomeScreen} component={HomeScreen} />
      <stack.Screen
        name={ScreenNums.ArticleDetails}
        component={ArticleDetails}
      />
    </stack.Navigator>
  );
}
