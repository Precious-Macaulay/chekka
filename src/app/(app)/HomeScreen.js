import React, { memo, useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import { Card, Feature, Transaction } from "../../components/Home";
import { useAuth } from "../../contexts/auth";
import API_BASE_URL from "../../constants/index";
import axios from "axios";
import { Link } from "expo-router";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [banks, setBanks] = useState(false);
  const [moneyIn, setMoneyIn] = useState(0);
  const [moneyOut, setMoneyOut] = useState(0);
  const { user, updateUserData } = useAuth();

  const getProducts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}products`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getBank = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}banks`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      response.data.success
        ? setBanks(response?.data?.data)
        : setBanks(response?.data?.success);
      setMoneyIn(response.data.income);
      setMoneyOut(response.data.expense);

      updateUserData({
        banks: response?.data?.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    getBank();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.icon} source={require("../../assets/menu.png")} />
        <Image
          style={styles.icon}
          source={require("../../assets/notification.png")}
        />
      </View>
      <Card banks={banks} moneyIn={moneyIn} moneyOut={moneyOut} />
      <View>
        <Text style={styles.subHead}>Quick Actions</Text>
        <View style={styles.actions}>
          <Link href={"/PayFormScreen"}>
            <Feature
              src={require("../../assets/delay.png")}
              backgroundColor="#fffbf2"
            >
              Collect Pay Later
            </Feature>
          </Link>
          <Link href={"/DeferPayScreen"}>
            <Feature
              src={require("../../assets/delay.png")}
              backgroundColor="#fffbf2"
            >
              Delay Payment
            </Feature>
          </Link>
          <Link href={"/AddProductScreen"}>
            <Feature
              src={require("../../assets/cart.png")}
              backgroundColor="#f5faf7"
              href={"/AddProductScreen"}
            >
              Add Products
            </Feature>
          </Link>
          <Link href={"/AllBankScreen"}>
            <Feature
              src={require("../../assets/bank.png")}
              backgroundColor="#f0f0f8"
              href={"/AllBankScreen"}
            >
              Manage Banks
            </Feature>
          </Link>
        </View>
      </View>
      <View style={styles.productHistory}>
        <Text style={styles.subHead}>Products History</Text>
        {products.length === 0 ? (
          <Text
            style={{
              textAlign: "center",
              marginTop: 40,
              fontSize: 10,
              fontWeight: "bold",
            }}
          >
            No Products available
          </Text>
        ) : (
          <View style={styles.transactionList}>
            <FlatList
              data={products}
              renderItem={({ item }) => (
                <Link
                  href={`/ProductScreen?name=${item.name}&price=${item.price}`}
                  style={{ paddingVertical: 20 }}
                >
                  <Transaction
                    name={item.name}
                    amount={item.price}
                    details={"2 transaction yet"}
                  />
                </Link>
              )}
              keyExtractor={(item) => `${item.index}`}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default memo(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 15,
  },
  icon: {
    width: 24,
    height: 24,
  },
  subHead: {
    fontSize: 20,
    fontWeight: "600",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 30,
  },
  productHistory: {
    flex: 1,
  },
  transactionList: {
    height: 240,
  },
});
