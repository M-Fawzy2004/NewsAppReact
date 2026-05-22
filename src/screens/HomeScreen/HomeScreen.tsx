import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header/Header";
import MainNews from "../../components/MainNews/MainNews";
import { View, FlatList } from "react-native";
import TopNews from "../../components/TopNews/TopNews";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Header />
      </View>
      <FlatList
        data={[1]}
        renderItem={() => (
          <View>
            <MainNews />
            <TopNews />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
