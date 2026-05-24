import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import styles from "./Styles";
import { Articles } from "./TypeData";
import { LinearGradient } from "expo-linear-gradient";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import { getTopNews } from "../../Services/TopNewsApis/TopNews";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import ScreenNums from "../../navigation/ScreenNums";

const MainNews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [topNews, setTopNews] = useState<Articles[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation =
    useNavigation<NavigationProp<Record<string, object | undefined>>>();

  const { width } = Dimensions.get("window");

  async function fetchNews() {
    setLoading(true);
    const news = await getTopNews(1, 10);
    setTopNews(news);
    setLoading(false);
  }

  useEffect(() => {
    fetchNews();
  }, []);

  function _renderShimmer() {
    return (
      <View style={{ flexDirection: "row" }}>
        {[1, 2, 3].map((item) => (
          <ShimmerPlaceHolder
            key={item}
            LinearGradient={LinearGradient}
            style={styles.containerShimmer}
          />
        ))}
      </View>
    );
  }

  function goToArticleDetails(article: Articles) {
    navigation.navigate(ScreenNums.ArticleDetails);
  }

  function mainNewsCard(item: Articles) {
    return (
      <TouchableOpacity onPress={() => goToArticleDetails(item)}>
        <ImageBackground
          source={{ uri: item.urlToImage }}
          resizeMode="cover"
          style={styles.container}
        >
          <View style={styles.smallContainer}>
            <Text style={styles.textSmallContainer}>
              {item.author || "Unknown Author"}
            </Text>
          </View>
          <View style={styles.mediumContainer}>
            <Text style={styles.textMediumContainer}>{item.title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      {loading ? (
        _renderShimmer()
      ) : (
        <>
          <FlatList
            data={topNews}
            renderItem={({ item }) => mainNewsCard(item)}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.title + index}
            onScroll={(e) => {
              const offset = e.nativeEvent.contentOffset.x;
              const index = Math.round(offset / width);

              setActiveIndex(index);
            }}
            scrollEventThrottle={16}
          />

          <View style={styles.indicatorContainer}>
            {topNews.map((_, index) => (
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
        </>
      )}
    </View>
  );
};

export default MainNews;
