import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useState } from "react";
import ScreenNums from "../../navigation/ScreenNums";
import { StackNavigatorParamList } from "../../navigation/StackNavigator";
import { RouteProp, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./Styles";
import { Ionicons } from "@expo/vector-icons";

export default function ArticleDetails() {
  const [liked, setLiked] = useState(false);
  const route =
    useRoute<RouteProp<StackNavigatorParamList, ScreenNums.ArticleDetails>>();
  const { article } = route.params;

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
        <TouchableOpacity
          style={styles.fabHeart}
          onPress={() => setLiked((prev) => !prev)}
        >
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={22}
            color={liked ? "#ff4757" : "#000"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.infoCard}>
          <View>
            <Text style={styles.sectionHeader}>Details</Text>
            <Text style={styles.descriptionNews}>{article.description}</Text>
          </View>

          {article.content && (
            <View style={styles.contentSection}>
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
