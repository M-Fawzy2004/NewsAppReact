import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 30,
    overflow: "hidden",
    height: 250,
    width: width - 20,
  },
  mediumContainer: {
    backgroundColor: "#eaeaeaa8",
    borderRadius: 30,
    margin: 10,
    padding: 7,
    marginTop: "auto",
  },
  textMediumContainer: {
    color: "black",
    fontSize: 15,
    fontWeight: 400,
    margin: 10,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  notActiveindicator: {
    width: 8,
    height: 8,
    borderRadius: 20,
    backgroundColor: "#eaeaea",
  },
  activeIndicator: {
    width: 20,
    height: 8,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
});

export default styles;
