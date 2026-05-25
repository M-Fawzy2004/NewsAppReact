import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./Styles";

import { Article } from "../../types/Article";

export default function ArticleDetails() {
  const { article: articleRaw } = useLocalSearchParams<{ article: string }>();
  const article: Article = JSON.parse(articleRaw);

  const handleOpenLink = () => {
    if (article.url) {
      Linking.openURL(article.url);
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{
            uri: article.urlToImage,
          }}
          style={styles.imageNews}
        >
          <LinearGradient
            colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
            style={styles.gradientOverlay}
          >
            <Text style={styles.overlayTitle}>{article.title}</Text>
            <Text style={styles.authorDate}>
              {article.author} •{" "}
              {new Date(article.publishedAt).toLocaleDateString()}
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.infoCard}>
          <View>
            <Text style={styles.sectionHeader}>Details</Text>
            <Text style={styles.descriptionNews}>{article.description}</Text>
          </View>
          <View style={styles.divider} />
          {article.content && (
            <View>
              <Text style={styles.sectionHeader}>Content</Text>
              <Text style={styles.contentText}>{article.content}</Text>
            </View>
          )}

          <TouchableOpacity style={styles.linkButton} onPress={handleOpenLink}>
            <Text style={styles.linkButtonText}>Read Full Article</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
