import { StyleSheet, View, Text } from "react-native";
import React, { memo } from "react";
import Input from "./Input";

const PinInput = ({ label, margin }) => {
  return (
    <View>
      {label && <Text style={styles.input_label}>{label}</Text>}
      <View style={[styles.pin_input, margin && styles.margin]}>
        <Input />
        <Input />
        <Input />
        <Input />
      </View>
    </View>
  );
};

export default memo(PinInput);

const styles = StyleSheet.create({
  pin_input: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    width: "100%",
  },
  input_label: {
    fontSize: 16,
    marginVertical: 15,
  },
  margin: {
    marginVertical: 40,
  },
});
