import React from "react";
import { View, FlatList } from "react-native";
import MainNews from "../../components/MainNews/MainNews";
import AllNews from "../../components/AllNews/AllNews";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      {listHomeScreen()}
    </View>
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
