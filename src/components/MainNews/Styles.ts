import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginBottom: 20,
    borderRadius: 20,
    overflow: "hidden",
    height: 250,
    width: width - 24,
  },
  containerShimmer: {
    marginVertical: 20,
    marginHorizontal: 12,
    borderRadius: 20,
    overflow: "hidden",
    height: 250,
    width: width - 24,
  },
  gradient: {
    flex: 1,
    justifyContent: "space-between",
    padding: 16,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  badgeText: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  bottomSection: {
    gap: 6,
  },
  title: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "800",
    lineHeight: 22,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  metaText: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 12,
    fontWeight: "500",
  },
  metaDot: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 12,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginBottom: 8,
  },
  notActiveindicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#d0d0d0",
  },
  activeIndicator: {
    width: 24,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#1a1a2e",
  },
});

export default styles;
