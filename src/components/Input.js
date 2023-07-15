import React, { memo } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

// Input component
const Input = ({ label, placeholder, type, size, center, ...props }) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          { fontSize: size },
          center && { textAlign: "center" },
        ]}
        placeholder={placeholder}
        placeholderTextColor="#d2d4ea"
        textContentType={type}
        {...props}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginVertical: 12,
    fontWeight: "500",
  },
  input: {
    width: "100%",
    height: 54,
    borderColor: "#d2d4ea",
    borderWidth: 1.5,
    borderRadius: 12,
    paddingHorizontal: 20,
    fontSize: 16,
  },
});

export default memo(Input);
