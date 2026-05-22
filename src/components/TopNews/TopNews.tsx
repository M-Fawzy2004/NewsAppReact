import { View, Text, ImageBackground, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./Styles";
import { getTopNews } from "../../Services/TopNewsApis/TopNews";
import { TypeTopNews } from "../TopNews/TypeTopNews";
import { RenderShimmer } from "./RanderShimmer";

export default function TopNews() {
  const [loading, setLoading] = useState(true);
  const [topNews, setTopNews] = useState<TypeTopNews[]>([]);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const loadMore = async () => {
    if (loadingMore) return;
    setLoadingMore(true);
    const nextPage = page + 1;
    const newData = await getTopNews(nextPage, 5);
    setTopNews((prev) => [...prev, ...newData]);
    setPage(nextPage);
    setLoadingMore(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function shuffleArray(array: any[]) {
    return [...array].sort(() => Math.random() - 0.9);
  }

  const fetchData = async () => {
    setLoading(true);
    const data = await getTopNews(1, 5);
    const shuffled = shuffleArray(data);
    setTopNews(shuffled);
    setPage(1);
    setLoading(false);
  };

  function topNewsCard(item: TypeTopNews) {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: item.urlToImage,
          }}
          style={styles.imageNews}
        />
        <View>
          <Text style={styles.titleNews} numberOfLines={2} ellipsizeMode="tail">
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
            <Text style={styles.authorNews}>{item.author}</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View>
      <View style={styles.containerTopNewsTitle}>
        <Text style={styles.topNewsTitle}>TopNews</Text>
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
