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
import axios from "axios";
import { router, useLocalSearchParams } from "expo-router";
import API_BASE_URL from "../../constants";
import { saveTokenToStorage } from "../../helpers/storage";
import { useAuth } from "../../contexts/auth";

// Validation schema for PIN input
const validationSchema = Yup.object().shape({
  pin: Yup.string()
    .required("Please enter the PIN")
    .length(4, "PIN must be exactly 4 digits"),
});

const PINScreen = () => {
  // Get the signIn function from the auth context
  const { signIn } = useAuth();
  // Get the phone number from the local search params
  const { phone_number } = useLocalSearchParams();

  const handleSubmitForm = async (values) => {
    try {
      const requestData = {
        phone_number,
        pin: values.pin,
      };

      // Perform a POST request to the server to save the PIN
      const response = await axios.post(
        `${API_BASE_URL}createpin`,
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Save the token to the storage
      const token = JSON.parse(response.token);
      await saveTokenToStorage(token);
      //  update the user context
      signIn(token);

      // Navigate to the HomeScreen
      router.replace({
        pathname: "/HomeScreen",
      });
    } catch (error) {
      console.error("Error saving PIN:", error);
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Back />
          <Header
            heading={"Create New PIN"}
            subHeading={
              "Create a new 4-digit PIN for signing into your account"
            }
          />
          <Formik
            initialValues={{ pin: "" }}
            onSubmit={handleSubmitForm}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleSubmit, values, errors }) => (
              <>
                <PinInput
                  margin
                  value={values.pin}
                  onChangeText={handleChange("pin")}
                />
                {errors.pin && (
                  <Text style={{ color: "red", marginBottom: 10 }}>
                    {errors.pin}
                  </Text>
                )}
                <Button onPress={handleSubmit}>Create</Button>
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

export default memo(PINScreen);
