import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Input } from "../../components";

const ErrorText = ({ children }) => (
  <View style={styles.errorContainer}>
    <Text style={styles.errorText}>{children}</Text>
  </View>
);

const validationSchema = Yup.object().shape({
  // phone: Yup.string().required("Phone is required"),
  amount: Yup.number()
    .required("Amount is required")
    .positive("Amount must be positive"),
  productName: Yup.string().required("Product Name is required"),
  paycode: Yup.string()
    .required("Paycode is required")
    .matches(/^\d{8}$/, "Paycode must be an 8-digit number"),
});

const PayFormScreen = () => {
  const handleSubmitForm = async (values) => {
    try {
      // Handle form submission here
      const { amount, productName: product, paycode } = values;

      const data = { amount, product, paycode };

      const response = await axios.post(
        `${API_BASE_URL}/createdeferpayment`,
        data,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      response.data.success
        ? router.replace("/HomeScreen")
        : alert("Payment failed");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={styles.pay_head}>
            <Image
              style={{
                width: 24,
                height: 24,
              }}
              source={require("../../assets/back.png")}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
              }}
            >
              Deferred Payment
            </Text>
            <View>{null}</View>
          </View>
          <Formik
            initialValues={{
              // phone: "",
              amount: "",
              productName: "",
              // quantity: "",
              paycode: "",
            }}
            onSubmit={handleSubmitForm}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleSubmit, values, errors }) => (
              <>
                {/* <Input
                  label="Phone"
                  placeholder="Bola"
                  onChangeText={handleChange("phone")}
                  value={values.phone}
                />
                {errors.phone && <ErrorText>{errors.phone}</ErrorText>} */}

                <Input
                  label="Amount"
                  placeholder="1236"
                  keyboardType="numeric"
                  onChangeText={handleChange("amount")}
                  value={values.amount}
                />
                {errors.amount && <ErrorText>{errors.amount}</ErrorText>}

                <Input
                  label="Product Name"
                  placeholder="Bread"
                  onChangeText={handleChange("productName")}
                  value={values.productName}
                />
                {errors.productName && (
                  <ErrorText>{errors.productName}</ErrorText>
                )}

                {/* <Input
                  label="Quantity"
                  placeholder="78"
                  keyboardType="numeric"
                  onChangeText={handleChange("quantity")}
                  value={values.quantity}
                />
                {errors.quantity && <ErrorText>{errors.quantity}</ErrorText>} */}

                <Input
                  label="Paycode"
                  placeholder="Enter 8 digit paycode"
                  onChangeText={handleChange("paycode")}
                  value={values.paycode}
                />
                {errors.paycode && <ErrorText>{errors.paycode}</ErrorText>}

                <Button onPress={handleSubmit} margin>
                  Pay
                </Button>
              </>
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 24,
  },
  pay_head: {
    display: "flex",
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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

export default PayFormScreen;
