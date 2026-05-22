import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eaeaea",
    marginHorizontal: 10,
    borderRadius: 16,
    overflow: "hidden",
    flexDirection: "row",
    height: 150,
    marginBottom: 10,
    width: width - 20,
  },
  containerShimmer: {
    backgroundColor: "#eaeaea",
    marginHorizontal: 10,
    borderRadius: 16,
    overflow: "hidden",
    flexDirection: "row",
    height: 150,
    width: width - 20,
  },
  topNewsTitle: {
    fontSize: 15,
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  containerTopNewsTitle: {
    backgroundColor: "#eaeaea",
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 100,
    height: 40,
    marginHorizontal: 10,
    marginTop: 15,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  imageNews: {
    width: 150,
    height: 150,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  titleNews: {
    width: 250,
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  descriptionNews: {
    paddingHorizontal: 10,
    fontSize: 13,
    overflow: "hidden",
    textAlignVertical: "center",
    textAlign: "left",
    width: 250,
    lineHeight: 15,
    color: "#555",
  },
  authorNews: {
    padding: 10,
    fontSize: 14,
    color: "#ffffff",
  },
  containerAuthor: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#858585",
  },
});
export default styles;
