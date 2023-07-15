import React, { memo } from "react";
import { Back, Button, Header, PinInput } from "../components";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Link } from "expo-router";

const PINScreen = () => {
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Back />
          <Header
            heading={"Create New PIN"}
            subHeading={
              "Create a new 4 digit pin for signing into your account"
            }
          />
          <PinInput margin />
          <Link href={"/HomeScreen"} asChild>
            <Button>Create</Button>
          </Link>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default memo(PINScreen);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 24,
  },
});
