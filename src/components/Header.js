import { StyleSheet, View, Text } from "react-native";
import React, { memo } from "react";

const Header = ({ heading, subHeading}) => {
  return (
    <View
      style={{
        marginVertical: 15,
      }}
    >
      <Text style={styles.h1}>{heading}</Text>
      <Text style={styles.h6}>{subHeading}</Text>
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 40,
  },
  h6: {
    fontSize: 16,
    color: "#d2d4ea",
    fontWeight: "600",
  },
});
