import React, { memo, useRef } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const PinInput = ({ label, margin, pin, setPin }) => {
  const inputRefs = useRef([]);

  const handleRef = (ref, index) => {
    inputRefs.current[index] = ref;
  };

  const focusNextInput = (index) => {
    if (inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const focusPreviousInput = (index) => {
    if (inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace") {
      setPin(
        (() => {
          const newPin = [...pin];
          newPin[index] = "";
          return newPin;
        })()
      );
      focusPreviousInput(index);
    }
  };

  return (
    <View>
      {label && <Text style={styles.input_label}>{label}</Text>}
      <View style={[styles.pin_input, margin && styles.margin]}>
        {Array.from({ length: 4 }).map((_, index) => (
          <TextInput
            key={index}
            ref={(ref) => handleRef(ref, index)}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            textAlign="center"
            value={pin[index]}
            onKeyPress={(e) => handleKeyPress(e, index)}
            onChangeText={(text) => {
              if (text.length === 1) {
                setPin(
                  (() => {
                    const newPin = [...pin];
                    newPin[index] = text;
                    return newPin;
                  })()
                );
                focusNextInput(index);
              }
            }}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pin_input: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  input_label: {
    fontSize: 16,
    marginVertical: 15,
  },
  margin: {
    marginVertical: 40,
  },
  input: {
    width: 60,
    height: 60,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 24,
    marginHorizontal: 6,
    paddingHorizontal: 12,
  },
});

export default memo(PinInput);
