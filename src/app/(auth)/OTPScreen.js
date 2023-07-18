import React, { memo } from "react";
import { Back, Button, Header, PinInput } from "../../components";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";
import API_BASE_URL from "../../constants";

const validationSchema = Yup.object().shape({
  otp: Yup.string()
    .required("Please enter the OTP")
    .length(4, "OTP must be exactly 4 digits"),
});

const OTPScreen = () => {
  const { phone_number, otp } = useLocalSearchParams();

  const handleSubmitForm = async (values) => {
    try {
      const requestData = {
        phone_number,
        otp: values.otp,
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

      const responseData = JSON.parse(response.data);
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
            heading={"Enter your OTP"}
            subHeading={`Input the OTP sent to your phone number to proceed to account creation{otp is ${otp}}`}
          />
          <Formik
            initialValues={{ otp: "" }}
            onSubmit={handleSubmitForm}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleSubmit, values, errors }) => (
              <>
                <PinInput
                  margin
                  value={values.otp}
                  onChangeText={handleChange("otp")}
                  error={errors.otp}
                />
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
});

export default memo(OTPScreen);
