import { StyleSheet, View, Image, Text, FlatList } from "react-native";
import React, { memo } from "react";
import { Button } from "../components";
import { Transaction } from "../components/Home";

const TokenScreen = () => {
  return (
    <>
      <View style={styles.bank_head}>
        <Image
          style={{
            width: 24,
            height: 24,
          }}
          source={require("../assets/menu.png")}
        />
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Generate Later Pay Token
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "#d2d4ea",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            This token is valid for 15 seconds
          </Text>
        </View>
        <View>{null}</View>
      </View>
      <View style={styles.balance_card}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            color: "#6488c5",
          }}
        >
          Total Debt
        </Text>
        <Text
          style={{
            fontSize: 42,
            fontWeight: "900",
            color: "#6488c5",
          }}
        >
          ₦54,453.87
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          paddingTop: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            color: "#6488c5",
          }}
        >
          Token
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
          }}
        >
          234444
        </Text>
      </View>
      <Button margin>Refresh Token</Button>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
          }}
        >
          Transaction History
        </Text>
        <View style={{ height: 280 }}>
          <FlatList
            data={[1, 2, 3, 4, 5, 1, 2, 3, 4, 5]}
            renderItem={() => <Transaction />}
            keyExtractor={(item) => {
              `${item}bgb`;
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
};

export default memo(TokenScreen);

const styles = StyleSheet.create({
  bank_head: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    marginTop: 15
  },
  balance_card: {
    marginVertical: 10,
    backgroundColor: "#e7f2fc",
    borderRadius: 20,
    padding: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
