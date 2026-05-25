import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./Styles";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View>
      <Image
        source={require("../../assets/images/welcome_news.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Stay Ahead of the World</Text>
      <Text style={styles.subtitle}>
        Your daily dose of breaking news, tailored insights, and global updates
        right at your fingertips.
      </Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => router.replace("/(tabs)/(home)")}
      >
        <Text style={styles.buttonText}>Start Now</Text>
      </TouchableOpacity>
    </View>
  );
}
