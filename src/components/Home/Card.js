import { StyleSheet, Text, View, Image } from "react-native";
import React, { memo } from "react";

const Card = () => {
  return (
    <View style={styles.home_card}>
      {/* <Text style={styles.connect_text}>Connect Bank Account</Text> */}
      <View style={styles.card_details}>
        <View style={styles.card_group}>
          <View style={[styles.card_key_group, { width: "45%" }]}>
            <Text style={styles.card_key}>Total Balance</Text>
            <Image
              style={{
                width: 16,
                height: 16,
              }}
              source={require("../../assets/eye.png")}
            />
          </View>
          <Text style={[styles.card_value_common, { fontSize: 36 }]}>
            ₦54,453.87
          </Text>
        </View>
        <View style={[styles.card_key_group, { width: "100%" }]}>
          <View>
            <Text style={styles.card_key}>Money In</Text>
            <Text style={styles.card_value_common}>₦54,453.00</Text>
          </View>
          <View>
            <Text style={styles.card_key}>Money Out</Text>
            <Text style={styles.card_value_common}>₦54,453.00</Text>
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
    marginVertical: 30,
  },
  connect_text: {
    color: "white",
    fontSize: 24,
    fontWeight: "400",
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
