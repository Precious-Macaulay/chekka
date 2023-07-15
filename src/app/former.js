// export { default as StartScreen } from "./StartScreen";
// export { default as RegisterScreen } from "./RegisterScreen";
// export { default as OTPScreen } from "./OTPScreen";
// export { default as PINScreen } from "./PINScreen";
// export { default as LoginScreen } from "./LoginScreen";
// export { default as ResetScreen } from "./ResetScreen";
// export { default as HomeScreen } from "./HomeScreen";
// export { default as AllBankScreen } from "./AllBankScreen";
// export { default as BankScreen } from "./BankScreen";
// export { default as PayFormScreen } from "./PayFormScreen";
// export { default as AddProductScreen } from "./AddProductScreen";
// export { default as DeferPayScreen } from "./DeferPayScreen";
// export { default as PayDetailsScreen } from "./PayDetailsScreen";
// export { default as ProductScreen } from "./ProductScreen";
// export { default as TokenScreen } from "./TokenScreen";

import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <Link href={"/StartScreen"}>
      <View>
        <Text>index</Text>
      </View>
    </Link>
  );
};

export default index;
