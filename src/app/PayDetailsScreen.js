import { StyleSheet, Text, View, Image } from "react-native";
import React, { memo } from "react";
import { Button } from "../components";
import { DetailCard } from "../components/Banks";

const PayDetailsScreen = () => {
  return (
    <>
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
          Payment Details
        </Text>
        <View>{null}</View>
      </View>
      <View style={styles.balance_card}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "900",
            color: "#6488c5",
          }}
        >
          ₦54,453.87
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            color: "#6488c5",
          }}
        >
          Today, 5:20pm
        </Text>
      </View>
      <View>
        <DetailCard detail={"From"} value={"Joel Agbamu"} />
        <DetailCard detail={"From"} value={"Joel Agbamu"} />
        <DetailCard detail={"From"} value={"Joel Agbamu"} />
      </View>
      {/* <View
        style={{
          marginTop: 260,
        }}
      >
        <Button margin outline>
          Send Reminder
        </Button>
      </View> */}
      {/* the second payment details screen */}

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          maxWidth: "100",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <View
          style={{
            width: "45%",
          }}
        >
          <Button>Mark Fulfiled</Button>
        </View>
        <View
          style={{
            width: "45%",
          }}
        >
          <Button outline>Cancel</Button>
        </View>
      </View>
    </>
  );
};

export default memo(PayDetailsScreen);

const styles = StyleSheet.create({
  bank_head: {
    display: "flex",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balance_card: {
    marginVertical: 40,
    borderRadius: 20,
    paddingLeft: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sub_head: {
    fontSize: 20,
    fontWeight: "500",
  },
});
