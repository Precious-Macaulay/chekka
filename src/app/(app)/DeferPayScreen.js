import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { memo, useEffect, useState } from "react";
import { Transaction } from "../../components/Home";
import { useAuth } from "../../contexts/auth";
import API_BASE_URL from "../../constants/index";
import axios from "axios";
import { Link } from "expo-router";

const BankScreen = () => {
  const { user } = useAuth();

  const [transactions, setTransactions] = useState([]);

  const getDeferredPayments = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}deferpayment`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      response.data.success
        ? setTransactions(response.data.data)
        : response.data.success;
    } catch (error) {
      console.log(error);
    }
  };

  // add each transaction amount to get total amount

  const totalAmount = transactions.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  useEffect(() => {
    getDeferredPayments();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.bank_head}>
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
          Deferred Payments
        </Text>

        <View></View>
      </View>
      <View style={styles.balance_card}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            color: "#6488c5",
          }}
        >
          Total Amount
        </Text>
        <Text
          style={{
            fontSize: 42,
            fontWeight: "900",
            color: "#6488c5",
          }}
        >
          ₦{totalAmount}.00
        </Text>
      </View>
      <View>
        <Text style={styles.sub_head}>Transaction List</Text>
        <View style={{ height: 470 }}>
          {/* <FlatList
            data={[1, 2, 3, 4, 5, 1, 2, 3, 4, 5]}
            renderItem={() => <Transaction />}
            keyExtractor={(item) => {
              `${item}bgsb`;
            }}
            showsVerticalScrollIndicator={false}
          /> */}
          {/* here is the updated one */}
          {transactions.length > 0 ? (
            <FlatList
              data={transactions}
              renderItem={({ item }) => (
                <Transaction
                  name={item.product}
                  amount={item.amount}
                  details={item.date.slice(0, 10)}
                />
              )}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <Text>No deferred payments yet</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default memo(BankScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  bank_head: {
    display: "flex",
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balance_card: {
    marginVertical: 15,
    backgroundColor: "#e7f2fc",
    borderRadius: 20,
    padding: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sub_head: {
    fontSize: 20,
    fontWeight: "500",
  },
});
