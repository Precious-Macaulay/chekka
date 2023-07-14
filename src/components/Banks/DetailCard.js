import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";

const DetailCard = ({ detail, value }) => {
  return (
    <View style={styles.detail_card}>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "500",
          color: "#696968"
        }}
      >
        {detail}
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "500",
        }}
      >
        {value}
      </Text>
    </View>
  );
};

export default memo(DetailCard);

const styles = StyleSheet.create({
  detail_card: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomColor: "#f7f6f5",
    borderBottomWidth: 1
  },
});
