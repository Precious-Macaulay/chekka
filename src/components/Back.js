import { StyleSheet, Image } from "react-native";
import React, { memo } from "react";

const Back = () => {
  return <Image source={require("../assets/back.png")} style={styles.back} />;
};

export default memo(Back);

const styles = StyleSheet.create({
  back: {
    marginTop: 20,
  },
});
