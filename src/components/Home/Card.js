import React, { memo, useState } from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useMonoConnect } from "@mono.co/connect-react-native";

const Card = ({ banks, moneyIn, moneyOut }) => {
  const { init } = useMonoConnect();

  return (
    <View style={styles.cardContainer}>
      {!banks ? (
        <Pressable onPress={() => init()}>
          <Text style={styles.connectText}>Link your bank account</Text>
        </Pressable>
      ) : (
        <View style={styles.cardDetails}>
          <View style={styles.cardGroup}>
            <View style={[styles.cardKeyGroup, { width: "45%" }]}>
              <Text style={styles.cardKey}>Total Balance</Text>
              <Image
                style={styles.eyeIcon}
                source={require("../../assets/eye.png")}
              />
            </View>
            <Text style={[styles.cardValueCommon, { fontSize: 36 }]}>
              ₦{banks.account.balance.toFixed(2)}
            </Text>
          </View>
          <View style={[styles.cardKeyGroup, { width: "100%" }]}>
            <View>
              <Text style={styles.cardKey}>Money In</Text>
              <Text style={styles.cardValueCommon}>₦{moneyIn.toFixed(2)}</Text>
            </View>
            <View>
              <Text style={styles.cardKey}>Money Out</Text>
              <Text style={styles.cardValueCommon}>₦{moneyOut.toFixed(2)}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default memo(Card);

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 24,
    backgroundColor: "black",
    borderRadius: 24,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 30,
  },
  connectText: {
    color: "white",
    fontSize: 24,
    fontWeight: "400",
  },
  cardGroup: {
    display: "flex",
  },
  cardKey: {
    color: "#ffffff",
  },
  cardKeyGroup: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  cardValueCommon: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 24,
  },
  cardDetails: {
    width: "100%",
    gap: 30,
  },
  eyeIcon: {
    width: 16,
    height: 16,
  },
});
