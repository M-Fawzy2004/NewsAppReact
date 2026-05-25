import React from "react";
import { View, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ArticleDetails from "../screens/ArticleDetails/ArticleDetails";
import ScreenNums from "./ScreenNums";
import { Article } from "../types/Article";
import { StyleSheet } from "react-native";

const stack = createNativeStackNavigator<StackNavigatorParamList>();

export default function StackNavigator() {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen
        name={ScreenNums.HomeScreen}
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitle: "News App",
          headerStyle: { backgroundColor: "transparent" },
          headerTransparent: true,
          headerLeft: () => <PersonCircleButton />,
          headerRight: () => <NotificationButton />,
        }}
      />
      <stack.Screen
        name={ScreenNums.ArticleDetails}
        component={ArticleDetails}
        options={{
          title: "",
          headerShown: true,
          headerTransparent: true,
          headerLeft: () => <ArticleBackButton />,
          headerRight: () => <ArticleHeartButton />,
        }}
      />
    </stack.Navigator>
  );
}

export type StackNavigatorParamList = {
  [ScreenNums.HomeScreen]: undefined;
  [ScreenNums.ArticleDetails]: { article: Article };
};

function ArticleBackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.headerButton}
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
      style={styles.headerButton}
    >
      <Ionicons
        name={liked ? "heart" : "heart-outline"}
        size={22}
        color="#ff0000"
      />
    </TouchableOpacity>
  );
}

function PersonCircleButton() {
  return (
    <View style={styles.headerButton}>
      <Ionicons name="person-circle" size={25} color="#000" />
    </View>
  );
}

function NotificationButton() {
  return (
    <View style={styles.headerButton}>
      <Ionicons name="notifications-outline" size={25} color="#000" />
    </View>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    width: 35,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
