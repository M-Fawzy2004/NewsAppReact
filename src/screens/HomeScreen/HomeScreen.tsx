import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header/Header";
import MainNews from "../../components/MainNews/MainNews";
import { StyleSheet, View } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Header />
        <MainNews />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
