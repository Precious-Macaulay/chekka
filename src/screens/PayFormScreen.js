import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { memo } from "react";
import { Background, Button, Input } from "../components";

const PayFormScreen = () => {
  return (
    <Background>
      <View style={styles.pay_head}>
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
          Deferred Payment
        </Text>
        <View>{null}</View>
      </View>
      <KeyboardAvoidingView>
        <ScrollView>
          <Input label={"Phone"} placeholder={"Bola"} />
          <Input label={"Amount"} placeholder={"1236"} />
          <Input label={"Product Name"} placeholder={"Bread"} />
          <Input label={"Quantity"} placeholder={"78"} />
          {/* <Input label={"Paycode"} placeholder={"Enter 8 digit paycode"} /> */}
          <Button margin>Pay</Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </Background>
  );
};

export default memo(PayFormScreen);

const styles = StyleSheet.create({
  pay_head: {
    display: "flex",
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
