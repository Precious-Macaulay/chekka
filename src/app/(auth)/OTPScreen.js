import React, { memo } from "react";
import { Back, Button, Header, PinInput } from "../../components";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  View,
  Text,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";
import { router } from "expo-router";
import API_BASE_URL from "../../constants";

const validationSchema = Yup.object().shape({
  otp: Yup.array()
    .required("OTP is required")
    .of(Yup.string().matches(/^[0-9]+$/, "OTP must be digits"))
    .length(4),
});
var test;
const OTPScreen = () => {
  const { phone_number, otp } = useLocalSearchParams();

  const handleSubmitForm = async (values) => {
    try {
      const requestData = {
        phone_number,
        otp: values.otp.join(""),
      };

      // Perform a POST request to the server with the OTP
      const response = await axios.post(
        `${API_BASE_URL}verifyotp`,
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = response.data;

      // Replace the route after successful signup
      router.replace({
        pathname: "/PINScreen",
        params: {
          phone_number: responseData.phone_number,
        },
      });
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Back />
          <Header
            heading="Enter your OTP"
            subHeading={`Input the OTP sent to your phone number to proceed to account creation (OTP is ${otp})`}
          />
          <Formik
            initialValues={{ otp: ["", "", "", ""] }}
            onSubmit={handleSubmitForm}
            validationSchema={validationSchema}
          >
            {({ handleSubmit, setFieldValue, values, errors }) => (
              <>
                <PinInput
                  margin
                  pin={values.otp}
                  setPin={(value) => setFieldValue("otp", value)}
                />
                {errors.otp && (
                  <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{errors.otp}</Text>
                  </View>
                )}
                <Button onPress={handleSubmit}>Next</Button>
              </>
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 24,
  },
  errorContainer: {
    marginVertical: 8,
    alignItems: "center",
  },
  errorText: {
    color: "#FF0000",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default memo(OTPScreen);
