import { StyleSheet, Text, View, Image } from "react-native";
import React, { memo } from "react";

const Card = ({balance, accountNumber, name }) => {
  return (
    <View style={styles.home_card}>
      {/* <Text style={styles.connect_text}>Connect Bank Account</Text> */}
      <View style={styles.card_details}>
        <View style={styles.card_group}>
          <View style={[styles.card_key_group, { width: "45%" }]}>
            <Text style={styles.card_key}>Current Balance</Text>
            <Image
              style={{
                width: 16,
                height: 16,
              }}
              source={require("../../assets/eye.png")}
            />
          </View>
          <Text style={[styles.card_value_common, { fontSize: 36 }]}>
            ₦{balance.toFixed(2)}
          </Text>
        </View>
        <View style={[styles.card_key_group, { width: "100%" }]}>
          <View>
            <Text style={[styles.card_key, { fontSize: 18 }]}>{accountNumber}</Text>
            <Text style={styles.card_value_common}>{name}</Text>
          </View>
          <View>
            <Image
              style={{
                width: 56,
                height: 56,
              }}
              source={require("../../assets/Zenith-Bank.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(Card);

const styles = StyleSheet.create({
  home_card: {
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 24,
    backgroundColor: "black",
    borderRadius: 24,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  card_group: {
    display: "flex",
  },
  card_key: {
    color: "#ffffff",
  },
  card_key_group: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card_value_common: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 24,
  },
  card_details: {
    width: "100%",
    gap: 30,
  },
});
