import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./Styles";
import { TypeAllNews } from "./TypeAllNews";
import { RenderShimmer } from "./RanderShimmer";
import { getAllNews } from "../../Services/AllNews/AllNews";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import ScreenNums from "../../navigation/ScreenNums";

export default function AllNews() {
  const [loading, setLoading] = useState(true);
  const [topNews, setTopNews] = useState<TypeAllNews[]>([]);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const navigation =
    useNavigation<NavigationProp<Record<string, object | undefined>>>();

  const loadMore = async () => {
    if (loadingMore || loading) return;

    setLoadingMore(true);

    try {
      const nextPage = page + 1;

      const newData = await getAllNews(nextPage);

      if (newData?.length > 0) {
        setTopNews((prev) => [...prev, ...newData]);
        setPage(nextPage);
      }
    } catch (error) {
      console.log("Load More Error", error);
    }

    setLoadingMore(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function shuffleArray(array: any[]) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  const fetchData = async () => {
    setLoading(true);
    const data = await getAllNews(page);
    const shuffled = shuffleArray(data);
    setTopNews(shuffled);
    setPage(1);
    setLoading(false);
  };

  function goToArticleDetails(item: TypeAllNews) {
    navigation.navigate(ScreenNums.ArticleDetails);
  }

  function topNewsCard(item: TypeAllNews) {
    return (
      <TouchableOpacity onPress={() => goToArticleDetails(item)}>
        <View style={styles.container}>
          <ImageBackground
            source={{
              uri: item.urlToImage,
            }}
            style={styles.imageNews}
          />
          <View>
            <Text
              style={styles.titleNews}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {item.title}
            </Text>
            <Text
              style={styles.descriptionNews}
              numberOfLines={3}
              ellipsizeMode="tail"
            >
              {item.description}
            </Text>
            <View style={styles.containerAuthor}>
              <Text
                style={styles.authorNews}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.author}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      <View style={styles.containerTopNewsTitle}>
        <Text style={styles.topNewsTitle}>All News</Text>
      </View>

      {loading ? (
        RenderShimmer()
      ) : (
        <FlatList
          style={{ paddingBottom: 150 }}
          data={topNews}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => topNewsCard(item)}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
        />
      )}
    </View>
  );
}
