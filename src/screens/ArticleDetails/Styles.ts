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
    height: 380,
    resizeMode: "cover",
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
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 12,
    marginTop: 16,
  },
  descriptionNews: {
    fontSize: 16,
    color: "#333333",
    lineHeight: 24,
    fontWeight: "500",
    textAlign: "justify",
  },
  contentSection: {
    marginTop: 24,
  },
  contentText: {
    fontSize: 15,
    color: "#555555",
    lineHeight: 22,
    textAlign: "justify",
  },
  linkButton: {
    backgroundColor: "#007AFF",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: "center",
    marginTop: 24,
    shadowColor: "#007AFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  linkButtonText: {
    fontSize: 16,
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
