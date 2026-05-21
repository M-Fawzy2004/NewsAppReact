import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "./Styles";

const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.textContainer}>
        <Ionicons name="person-circle" size={25} color="#000" />
      </View>
      <View style={styles.textHeader}>
        <Text style={styles.textLabel}>News App</Text>
      </View>{" "}
      <View style={styles.textContainer}>
        <Ionicons name="notifications-outline" size={25} color="#000" />
      </View>
    </View>
  );
};

export default Header;
