import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./Styles";
import { Article } from "../../types/Article";
import { RenderShimmer } from "./RanderShimmer";
import { getAllNews } from "../../Services/AllNews/AllNews";
import { useRouter } from "expo-router";
import NewsCard from "../NewsCard/NewsCard";

export default function AllNews() {
  const [loading, setLoading] = useState(true);
  const [topNews, setTopNews] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const router = useRouter();

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

  function goToArticleDetails(item: Article) {
    router.push({ pathname: "/article-details", params: { article: JSON.stringify(item) } });
  }

  function topNewsCard(item: Article) {
    return <NewsCard article={item} onPress={() => goToArticleDetails(item)} />;
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
