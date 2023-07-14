import { StyleSheet, View } from "react-native";
import React, { memo } from "react";

const Background = ({ children }) => {
  return <View style={styles.background}>{children}</View>;
};

export default memo(Background);

const styles = StyleSheet.create({
  background: {
    margin: 24,
  },
});
