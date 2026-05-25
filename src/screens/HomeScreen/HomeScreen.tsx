import React from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import MainNews from "../../components/MainNews/MainNews";
import AllNews from "../../components/AllNews/AllNews";

const HomeScreen = () => {
  return (
    <SafeAreaView>
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
