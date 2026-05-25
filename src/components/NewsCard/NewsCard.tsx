import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./Styles";
import { Article } from "../../types/Article";

type NewsCardProps = {
  article: Article;
  onPress?: () => void;
};

const NewsCard = ({ article, onPress }: NewsCardProps) => {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-US",
    { month: "short", day: "numeric", year: "numeric" }
  );

  const category = article.source?.name || "News";

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: article.urlToImage }}
          style={styles.image}
          resizeMode="cover"
        />
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 0.85)"]}
          style={styles.gradientOverlay}
        >
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
          <Text style={styles.overlayTitle} numberOfLines={2}>
            {article.title}
          </Text>
        </LinearGradient>
      </View>

      <View style={styles.body}>
        {article.description && (
          <Text style={styles.description} numberOfLines={3}>
            {article.description}
          </Text>
        )}

        <View style={styles.divider} />

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="person-circle-outline" size={18} color="#aaa" />
            <Text style={styles.authorText} numberOfLines={1}>
              {article.author || "Unknown"}
            </Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="calendar-outline" size={16} color="#ccc" />
            <Text style={styles.dateText}>{formattedDate}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.readMoreButton} onPress={onPress}>
          <Text style={styles.readMoreText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewsCard;
