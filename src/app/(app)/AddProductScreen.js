import React, { memo } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
  Image,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Input } from "../../components";
import { useAuth } from "../../contexts/auth";
import API_BASE_URL from "../../constants/index";
import axios from "axios";
import { router } from "expo-router";

const ErrorText = ({ children }) => (
  <View style={styles.errorContainer}>
    <Text style={styles.errorText}>{children}</Text>
  </View>
);

const validationSchema = Yup.object().shape({
  productName: Yup.string().required("Product Name is required"),
  costType: Yup.string().required("Cost Type is required"),
  amount: Yup.number()
    .required("Amount is required")
    .positive("Amount must be positive"),
  quantity: Yup.number()
    .required("Quantity is required")
    .integer("Quantity must be an integer"),
});

const AddProductScreen = () => {
  const { user } = useAuth();
  const handleSubmitForm = async (values) => {
    try {
      // Handle form submission here
      const {
        productName: name,
        costType: cost_type,
        amount: price,
        quantity,
      } = values;

      const data = { name, price, quantity, cost_type };

      const response = await axios.post(`${API_BASE_URL}/createproduct`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      response.data.success
        ? router.replace("/HomeScreen")
        : alert("Product creation failed");
        
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={styles.product_head}>
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
              Add Product
            </Text>
            <View>{null}</View>
          </View>
          <Formik
            initialValues={{
              productName: "",
              costType: "",
              amount: "",
              quantity: "",
            }}
            onSubmit={handleSubmitForm}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleSubmit, values, errors }) => (
              <>
                <Input
                  label="Product Name"
                  placeholder="Bread"
                  onChangeText={handleChange("productName")}
                  value={values.productName}
                />
                {errors.productName && (
                  <ErrorText>{errors.productName}</ErrorText>
                )}

                <Input
                  label="Cost Type"
                  placeholder="Fixed"
                  onChangeText={handleChange("costType")}
                  value={values.costType}
                />
                {errors.costType && <ErrorText>{errors.costType}</ErrorText>}

                <Input
                  label="Amount"
                  placeholder="1236"
                  keyboardType="numeric"
                  onChangeText={handleChange("amount")}
                  value={values.amount}
                />
                {errors.amount && <ErrorText>{errors.amount}</ErrorText>}

                <Input
                  label="Quantity"
                  placeholder="78"
                  keyboardType="numeric"
                  onChangeText={handleChange("quantity")}
                  value={values.quantity}
                />
                {errors.quantity && <ErrorText>{errors.quantity}</ErrorText>}

                <Button onPress={handleSubmit} margin>
                  Create Product
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
  product_head: {
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

export default memo(AddProductScreen);
