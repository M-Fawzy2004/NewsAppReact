import React from "react";
import { View } from "react-native";
import styles from "./Styles";
import { LinearGradient } from "expo-linear-gradient";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";

export function RenderShimmer() {
  return (
    <View>
      {[1, 2, 3].map((item) => (
        <View key={item} style={styles.container}>
          <ShimmerPlaceHolder
            LinearGradient={LinearGradient}
            style={styles.imageNews}
          />

          <View style={{ paddingTop: 10 }}>
            <ShimmerPlaceHolder
              LinearGradient={LinearGradient}
              style={{
                width: 220,
                height: 20,
                borderRadius: 10,
                marginBottom: 20,
              }}
            />

            <ShimmerPlaceHolder
              LinearGradient={LinearGradient}
              style={{
                width: 250,
                height: 15,
                borderRadius: 10,
                marginBottom: 8,
              }}
            />

            <ShimmerPlaceHolder
              LinearGradient={LinearGradient}
              style={{
                width: 180,
                height: 15,
                borderRadius: 10,
              }}
            />
          </View>
        </View>
      ))}
    </View>
  );
}
