import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { memo } from "react";

const Input = ({ label, placeholder, type }) => {
  return (
    <View>
      {label && <Text style={styles.input_label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={"#d2d4ea"}
        textContentType={type}
      />
    </View>
  );
};

export default memo(Input);

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 54,
    borderColor: "#d2d4ea",
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  input_label: {
    fontSize: 16,
    marginVertical: 12,
    fontWeight: "500"
  },
});
