import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";

// Header component
const Header = ({ heading, subHeading }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.subHeading}>{subHeading}</Text>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 40,
  },
  subHeading: {
    fontSize: 16,
    color: "#d2d4ea",
    fontWeight: "600",
  },
});

export default memo(Header);