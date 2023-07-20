// Import statements
import React, { memo } from "react";
import { StyleSheet, TouchableWithoutFeedback, Keyboard, View, Text } from "react-native";
import { Back, Button, Header, Input } from "../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { router } from "expo-router";
import API_BASE_URL from "../../constants";

// Helper component to display validation errors (you can customize it further if needed)
const ErrorText = ({ children }) => (
  <View style={styles.errorContainer}>
    <Text style={styles.errorText}>{children}</Text>
  </View>
);

// Validation schema for form fields
const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(/^\+234[789]\d{9}$/, "Invalid Nigerian phone number input country code"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  businessName: Yup.string().required("Business Name is required"),
});

const RegisterScreen = () => {
  // Function to handle form submission
  const handleSubmitForm = async (values) => {
    try {
      const requestData = {
        phone_number: values.phoneNumber,
        first_name: values.firstName,
        last_name: values.lastName,
        business_name: values.businessName,
      };

      // Make an API request using Axios
      const response = await axios.post(`${API_BASE_URL}signup`, requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      const { phone_number, otp } = response.data;

      // Replace the route after successful signup
      router.replace({
        pathname: "/OTPScreen",
        params: {
          phone_number,
          otp,
        },
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Back />
          <Header heading="Get Started" subHeading="Let's get to know you" />
          <Formik
            initialValues={{
              phoneNumber: "",
              firstName: "",
              lastName: "",
              businessName: "",
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
                {errors.phoneNumber && <ErrorText>{errors.phoneNumber}</ErrorText>}

                <Input
                  label="First Name"
                  placeholder="John"
                  onChangeText={handleChange("firstName")}
                  value={values.firstName}
                />
                {errors.firstName && <ErrorText>{errors.firstName}</ErrorText>}

                <Input
                  label="Last Name"
                  placeholder="Peters"
                  onChangeText={handleChange("lastName")}
                  value={values.lastName}
                />
                {errors.lastName && <ErrorText>{errors.lastName}</ErrorText>}

                <Input
                  label="Business Name"
                  placeholder="Okara Enterprise"
                  onChangeText={handleChange("businessName")}
                  value={values.businessName}
                />
                {errors.businessName && <ErrorText>{errors.businessName}</ErrorText>}

                <Button onPress={handleSubmit} margin>
                  Next
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
    marginTop: 4,
    marginBottom: 8,
  },
  errorText: {
    color: "red",
    fontSize: 14,
  },
});

export default memo(RegisterScreen);
