import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import StackNavigator from "./src/navigation/StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
