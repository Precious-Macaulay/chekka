import { StyleSheet, Text, View, Image } from "react-native";
import React, { memo } from "react";

const Transaction = () => {
  return (
    <View style={styles.transaction_group}>
      <View style={styles.transaction_details}>
        <View
          style={{
            backgroundColor: "#f6f6f7",
            borderRadius: 8,
            padding: 12,
          }}
        >
          <Image source={require("../../assets/back.png")} />
        </View>
        <View>
          <Text style={styles.detail_head}>Bread</Text>
          <Text style={{ color: "#8f93a1" }}>10 transactions</Text>
        </View>
      </View>
      <Text style={styles.transaction_amount}>₦553.65</Text>
    </View>
  );
};

export default memo(Transaction);

const styles = StyleSheet.create({
  transaction_group: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  transaction_details: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  transaction_amount: {
    fontSize: 18,
    fontWeight: "600",
  },
  detail_head: {
    fontSize: 18,
    fontWeight: "600",
  },
});
