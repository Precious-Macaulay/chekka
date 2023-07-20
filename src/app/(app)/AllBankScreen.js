import { StyleSheet, View, Image, Text } from "react-native";
import React, { memo } from "react";
import { Button, Header } from "../../components";
import Card from "../../components/Banks/Card";

const AllBankScreen = () => {
  return (
    <>
      <View style={styles.bank_head}>
        <Image
          style={{
            width: 24,
            height: 24,
          }}
          source={require("../../assets/back.png")}
        />
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            All Connected Banks
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#d2d4ea",
              fontWeight: "600",
              textAlign: "center"
            }}
          >
            Tap card to view more
          </Text>
        </View>
        <Image
          style={{
            width: 42,
            height: 42,
          }}
          source={require("../../assets/add.png")}
        />
      </View>

      <Card />
      <View style={styles.options}>
        <View
          style={{
            width: "45%",
          }}
        >
          <Button>View More</Button>
        </View>
        <View
          style={{
            width: "45%",
          }}
        >
          <Button outline>Delete</Button>
        </View>
      </View>
    </>
  );
};

export default memo(AllBankScreen);

const styles = StyleSheet.create({
  bank_head: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
  },
  options: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "100",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
