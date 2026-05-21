import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  Dimensions,
} from "react-native";
import styles from "./Styles";
import { newsData } from "./newsData";

const MainNews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { width } = Dimensions.get("window");

  function getNews(item: { id?: number; image: any; title: any }) {
    return (
      <ImageBackground
        source={{ uri: item.image }}
        resizeMode="cover"
        style={styles.container}
      >
        <View style={styles.mediumContainer}>
          <Text style={styles.textMediumContainer}>{item.title}</Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <View>
      <FlatList
        data={newsData}
        renderItem={({ item }) => getNews(item)}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={(e) => {
          const offset = e.nativeEvent.contentOffset.x;
          const index = Math.round(offset / width);
          setActiveIndex(index);
        }}
        scrollEventThrottle={16}
      />
      <View style={styles.indicatorContainer}>
        {newsData.map((_, index) => (
          <View
            key={index}
            style={
              activeIndex === index
                ? styles.activeIndicator
                : styles.notActiveindicator
            }
          />
        ))}
      </View>
    </View>
  );
};

export default MainNews;
