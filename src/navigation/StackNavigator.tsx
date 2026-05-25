import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ArticleDetails from "../screens/ArticleDetails/ArticleDetails";
import ScreenNums from "./ScreenNums";
import { Article } from "../types/Article";

const stack = createNativeStackNavigator<StackNavigatorParamList>();

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

export type StackNavigatorParamList = {
  [ScreenNums.HomeScreen]: undefined;
  [ScreenNums.ArticleDetails]: { article: Article };
};
