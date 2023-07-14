import { StyleSheet, Text, View, Image } from "react-native";
import React, { memo } from "react";

const Feature = ({ children, src, backgroundColor }) => {
  return (
    <View>
      <View style={styles.quick_action_group}>
        <View
          style={[
            styles.quick_action_background,
            { backgroundColor: backgroundColor },
          ]}
        >
          <Image style={styles.quick_action_image} source={src} />
        </View>
        <Text style={styles.quick_action_text}>{children}</Text>
      </View>
    </View>
  );
};

export default memo(Feature);

const styles = StyleSheet.create({
  quick_action_group: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    width: "max-content",
  },
  quick_action_background: {
    padding: 16,
    borderRadius: 16,
  },
  quick_action_text: {
    fontSize: 14,
    fontWeight: "400",
    width: 50,
    textAlign: "center",
  },
  quick_action_image: {
    width: 32,
    height: 32,
  },
});
