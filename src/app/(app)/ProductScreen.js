import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { memo, useState, useEffect } from "react";
import { Transaction } from "../../components/Home";
import { useAuth } from "../../contexts/auth";
import API_BASE_URL from "../../constants/index";
import axios from "axios";
import { Link, useLocalSearchParams } from "expo-router";

const ProductScreen = () => {
  const [transactions, setTransactions] = useState({
    paging: {
      total: 190,
      page: 2,
      previous: "https://api.withmono.com/accounts/:id/transactions?page=2",
      next: "https://api.withmono.com/accounts/:id/transactions?page=3",
    },
    data: [
      {
        _id: "62a05bc04112ea670bd09812",
        type: "debit",
        amount: 2400,
        narration: "BOLA credit",
        date: "2022-05-30T16:03:00",
        balance: 1020841,
        currency: "NGN",
        category: "online_transactions",
      },
      {
        _id: "62a05bc04112ea670bd13465",
        type: "credit",
        amount: 3000,
        narration:
          "TURAT credit",
        date: "2022-05-30T15:44:00",
        balance: 1168926,
        currency: "NGN",
        category: "transfer",
      },
    ],
  });

  const { name, price } = useLocalSearchParams();
  // const { user } = useAuth();

  // const getTransactions = async () => {
  //   try {
  //     const response = await axios.get(`${API_BASE_URL}/transactions`, {
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     });
  //     setTransactions(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getTransactions();
  // }, []);

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
          {name}'s Product
        </Text>
        <View>{null}</View>
      </View>
      <View style={styles.balance_card}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            color: "#6488c5",
          }}
        >
          Total Payment
        </Text>
        <Text
          style={{
            fontSize: 42,
            fontWeight: "900",
            color: "#6488c5",
          }}
        >
          ₦{price}.00
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#f7f6f5",
          borderRadius: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          gap: 1,
          padding: 20,
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Total Sales
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            2
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
          }}
        ></View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Stocks Left
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            32
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.sub_head}>Transaction History</Text>
        {/* <View style={{ height: 470 }}>
          <FlatList
            data={[1, 2, 3, 4, 5, 1, 2, 3, 4, 5]}
            renderItem={() => <Transaction />}
            keyExtractor={(item) => {
              `${item}bgb`;
            }}
            showsVerticalScrollIndicator={false}
          />
        </View> */}
        {/* this is the updated one */}
        <View style={{ height: 470 }}>
          <FlatList
            data={transactions.data}
            renderItem={({ item }) => (
              <Link href={"/PayDtailScreen"} asChild>
              <Transaction
                name={item.narration}
                amount={item.amount}
                details={item.date}
              />
              </Link>
            )}
            keyExtractor={(item) => {
              `${item._id}`;
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default memo(ProductScreen);

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
