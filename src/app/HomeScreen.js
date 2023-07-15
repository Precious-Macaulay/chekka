import { Image, FlatList, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { Card, Feature, Transaction } from "../components/Home";

const HomeScreen = () => {
  return (
    <>
      <View style={styles.home_head}>
        <Image
          style={{
            width: 24,
            height: 24,
          }}
          source={require("../assets/menu.png")}
        />
        <Image source={require("../assets/notification.png")} />
      </View>
      <Card />
      <View>
        <Text style={styles.sub_head}>Quick Actions</Text>
        <View style={styles.actions}>
          <Feature
            src={require("../assets/delay.png")}
            backgroundColor={"#fffbf2"}
          >
            Delay Payment
          </Feature>
          <Feature
            src={require("../assets/cart.png")}
            backgroundColor={"#f5faf7"}
          >
            Add Products
          </Feature>
          <Feature
            src={require("../assets/bank.png")}
            backgroundColor={"#f0f0f8"}
          >
            Manage Banks
          </Feature>
        </View>
      </View>
      <View style={{height: "100%"}}>
        <Text style={styles.sub_head}>Products History</Text>
        <View style={{height: 240}}>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={() => <Transaction />}
            keyExtractor={(item) => {
              `${item}bgb`;
            }}
          />
        </View>
      </View>
    </>
  );
};

export default memo(HomeScreen);

const styles = StyleSheet.create({
  home_head: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    marginTop: 15,
  },
  sub_head: {
    fontSize: 20,
    fontWeight: "600",
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    flexBasis: "1fr",
    marginVertical: 30,
  },
});
