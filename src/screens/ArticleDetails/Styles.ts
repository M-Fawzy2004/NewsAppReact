import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  imageContainer: {
    width: "100%",
    overflow: "hidden",
  },
  imageNews: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
    borderRadius: 25,
    overflow: "hidden",
  },
  gradientOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
  },
  overlayTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
    lineHeight: 28,
  },
  authorDate: {
    fontSize: 12,
    color: "#e0e0e0",
    fontStyle: "italic",
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  infoCard: {
    flex: 3,
    backgroundColor: "#ffffff",
    borderRadius: 35,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 12,
    marginTop: 10,
  },
  descriptionNews: {
    fontSize: 16,
    color: "#333333",
    lineHeight: 24,
    fontWeight: "500",
    textAlign: "justify",
  },
  contentText: {
    fontSize: 15,
    color: "#555555",
    lineHeight: 22,
    textAlign: "justify",
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 24,
  },
  linkButton: {
    backgroundColor: "#1a1a2e",
    borderRadius: 35,
    paddingVertical: 17,
    paddingHorizontal: 16,
    alignItems: "center",
    marginTop: 24,
    shadowColor: "#1a1a2e",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  linkButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffffff",
  },
  titleNews: {
    fontSize: 17,
    fontWeight: "bold",
    marginHorizontal: 8,
    marginBottom: 8,
  },
});

export default styles;
