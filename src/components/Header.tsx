import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="person-circle" size={35} color="#000" />
      <Text style={styles.textHeader}>News App</Text>
      <Ionicons name="notifications-outline" size={30} color="#000" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
