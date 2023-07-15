import { StyleSheet, Image, Pressable } from "react-native";
import React, { memo } from "react";
import { useRouter } from "expo-router";

const Back = () => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };
  return (
    <Pressable onPress={handleBackPress} style={styles.back}>
      <Image source={require("../assets/back.png")} />
    </Pressable>
  );
};

export default memo(Back);

const styles = StyleSheet.create({
  back: {
    marginTop: 20,
  },
});
