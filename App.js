import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// import customFont from "./constants/custom-font";
import {
  StartScreen,
  RegisterScreen,
  OTPScreen,
  PINScreen,
  LoginScreen,
  ResetScreen,
  HomeScreen,
  AllBankScreen,
  BankScreen,
  PayFormScreen,
  DeferPayScreen,
  PayDetailsScreen,
  AddProductScreen,
  ProductScreen,
  TokenScreen,
} from "/app";

// SplashScreen.preventAutoHideAsync()

export default function App() {
  // const [fontsLoaded] = useFonts(customFont)

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {/* <StartScreen /> */}
        {/* <RegisterScreen /> */}
        {/* <OTPScreen /> */}
        {/* <PINScreen /> */}
        {/* <LoginScreen /> */}
        {/* <ResetScreen /> */}
        {/* <HomeScreen /> */}
        {/* <AllBankScreen /> */}
        {/* <BankScreen /> */}
        {/* <PayFormScreen /> */}
        {/* <DeferPayScreen /> */}
        {/* <PayDetailsScreen /> */}
        {/* <AddProductScreen /> */}
        {/* <ProductScreen /> */}
        <TokenScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
