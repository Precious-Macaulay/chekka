import { StyleSheet, Text, View, Image } from "react-native";
import React, { memo } from "react";


const Transaction = ({ name, amount, details }) => {
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
          <Text style={styles.detail_head}>{name}</Text>
          <Text style={{ color: "#8f93a1" }}>{details}</Text>
        </View>
      </View>
      <Text style={styles.transaction_amount}> ₦{amount}</Text>
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
    marginTop: 40,
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
    marginLeft: 80,
  },
  detail_head: {
    fontSize: 18,
    fontWeight: "600",
  },
});
