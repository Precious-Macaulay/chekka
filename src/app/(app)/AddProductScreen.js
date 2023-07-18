import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { memo } from "react";
import { Button, Input } from "../../components";

const AddProductScreen = () => {
  return (
    <>
      <View style={styles.product_head}>
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
          Add Product
        </Text>
        <View>{null}</View>
      </View>
      <KeyboardAvoidingView>
        <ScrollView>
          <Input label={"Product Name"} placeholder={"Bread"} />
          <Input label={"Cost Type"} placeholder={"Fixed"} />
          <Input label={"Amount"} placeholder={"1236"} />
          <Input label={"Quantity"} placeholder={"78"} />
          <Button margin>Create Product</Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default memo(AddProductScreen);

const styles = StyleSheet.create({
  product_head: {
    display: "flex",
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
