import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  textHeader: {
    backgroundColor: "#eaeaea",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    height: 55,
    paddingHorizontal: 40,
    flexDirection: "row",
  },
  textLabel: {
    fontSize: 18,
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  textContainer: {
    backgroundColor: "#eaeaea",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    height: 55,
    width: 55,
  },
});

export default styles;
