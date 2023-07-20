import React, { memo } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
} from "react-native";
import { Back, Button, Header, Input } from "../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import API_BASE_URL from "../../constants";

const ResetScreen = () => {
  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required("Phone Number is required")
      .matches(
        /^\+234[789]\d{9}$/,
        "Invalid Nigerian phone number input country code"
      ),
  });

  const handleSubmitForm = async (values) => {
    try {
      let requestData = JSON.stringify({
        phone_number: values.phoneNumber,
      });

      // Perform a POST request to the server to request OTP
      const response = await axios.post(
        `${API_BASE_URL}requestotp`,
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { phone_number, otp } = response.data;
      // Replace the route after successful OTP request
      router.replace({
        pathname: "/OTPScreen",
        params: {
          phone_number,
          otp,
        },
      });
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Back />
          <Header
            heading="Reset your 4 digit PIN"
            subHeading="Please enter the phone number associated with the account to receive the reset link"
          />
          <Formik
            initialValues={{
              phoneNumber: "",
            }}
            onSubmit={handleSubmitForm}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleSubmit, values, errors }) => (
              <>
                <Input
                  label="Phone Number"
                  placeholder="+2348162060070"
                  type="telephoneNumber"
                  keyboardType="phone-pad"
                  onChangeText={handleChange("phoneNumber")}
                  value={values.phoneNumber}
                />
                {errors.phoneNumber && (
                  <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{errors.phoneNumber}</Text>
                  </View>
                )}
                <Button onPress={handleSubmit} margin>
                  Reset
                </Button>
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
    marginTop: 8,
    marginBottom: 16,
    alignItems: "center",
  },
  errorText: {
    color: "#FF0000",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default memo(ResetScreen);
