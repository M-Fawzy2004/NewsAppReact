import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header/Header";
import MainNews from "../../components/MainNews/MainNews";
import { View, FlatList } from "react-native";
import AllNews from "../../components/AllNews/AllNews";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Header />
      </View>
      {listHomeScreen()}
    </SafeAreaView>
  );
};

export default HomeScreen;

function listHomeScreen() {
  return (
    <FlatList
      data={[1]}
      renderItem={() => (
        <View>
          <MainNews />
          <AllNews />
        </View>
      )}
    />
  );
}
