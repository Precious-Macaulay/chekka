import { StyleSheet, Pressable, Text } from "react-native";
import React, { memo, forwardRef } from "react";

const Button = forwardRef(({ children, outline, margin, ...props }, ref) => {
  return (
    <Pressable
      {...props}
      style={[
        styles.button,
        outline && styles.outline,
        margin && styles.margin,
      ]}
      ref={ref}
    >
      <Text style={[styles.text, outline && styles.outlineText]}>
        {children}
      </Text>
    </Pressable>
  );
});

export default memo(Button);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    borderRadius: 12,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3e3d77",
  },
  text: {
    fontSize: 16,
    color: "#ffffff",
  },
  outlineText: {
    color: "#3e3d77",
  },
  outline: {
    backgroundColor: "#ffffff",
    borderColor: "#3e3d77",
    borderWidth: 1,
  },
  margin: {
    marginVertical: 40,
  },
});
