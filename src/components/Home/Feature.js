import React, { memo } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Feature = ({ children, src, backgroundColor }) => {
  return (
      <View style={styles.container}>
        <View style={[styles.quickActionGroup, { backgroundColor }]}>
          <Image style={styles.quickActionImage} source={src} />
        </View>
        <Text style={styles.quickActionText}>{children}</Text>
      </View>
  );
};

export default memo(Feature);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  quickActionGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 16,
  },
  quickActionText: {
    fontSize: 14,
    fontWeight: "400",
    width: 50,
    textAlign: "center",
  },
  quickActionImage: {
    width: 32,
    height: 32,
  },
});
