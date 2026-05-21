import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header/Header";
import MainNews from "../../components/MainNews/MainNews";
import { StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <MainNews />
    </SafeAreaView>
  );
};

export default HomeScreen;
