import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { memo } from "react";
import { Background } from "../components";
import { Transaction } from "../components/Home";

const BankScreen = () => {
  return (
    <Background>
      <View style={styles.bank_head}>
        <Image
          style={{
            width: 24,
            height: 24,
          }}
          source={require("../assets/back.png")}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
          }}
        >
          Deferred Payments
        </Text>
        <View>
          <Image
            style={{
              width: 34,
              height: 34,
            }}
            source={require("../assets/add.png")}
          />
        </View>
      </View>
      <View style={styles.balance_card}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            color: "#6488c5",
          }}
        >
          Total Amount
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
      <View>
        <Text style={styles.sub_head}>Transaction List</Text>
        <View style={{ height: 470 }}>
          <FlatList
            data={[1, 2, 3, 4, 5, 1, 2, 3, 4, 5]}
            renderItem={() => <Transaction />}
            keyExtractor={(item) => {
              `${item}bgsb`;
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </Background>
  );
};

export default memo(BankScreen);

const styles = StyleSheet.create({
  bank_head: {
    display: "flex",
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balance_card: {
    marginVertical: 15,
    backgroundColor: "#e7f2fc",
    borderRadius: 20,
    padding: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sub_head: {
    fontSize: 20,
    fontWeight: "500",
  },
});
