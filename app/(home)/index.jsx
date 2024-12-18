import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import TableTransactions from "../../components/TableTransactions";

export default function Home() {

  const [user, setUser] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        const res = await axios.get("http://192.168.30.96:8080/profile", {
          headers: {
            Authorization: `Bearer ${value}`,
          },
        });
          const userData = res.data.data;
          setUser({
            fullname: userData.fullname,
            avatar_url: userData.avatar_url,
            typeofaccount: "Personal Account",
            accountnumber: userData.wallet.account_number,
            balance: parseFloat(userData.wallet.balance),
          });
          await AsyncStorage.setItem(
            "balance",
            userData.wallet.balance.toString()
          );
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      } finally {
        setLoading(false);
      }
    setRefreshing(false);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("token");
        if (value !== null) {
          const res = await axios.get("http://192.168.30.96:8080/profile", {
            headers: {
              Authorization: `Bearer ${value}`,
            },
          });
          const userData = res.data.data;
          setUser({
            fullname: userData.fullname,
            avatar_url: userData.avatar_url,
            typeofaccount: "Personal Account",
            accountnumber: userData.wallet.account_number,
            balance: parseFloat(userData.wallet.balance),
          });
          console.log(userData);
          await AsyncStorage.setItem(
            "balance",
            userData.wallet.balance.toString()
          );
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      } finally {
      setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading){
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#19918F" />
      </View>
    );
  }

  return (
    <ScrollView containerStyle={styles.container}
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image
            source={{ uri: user?.avatar_url }}
            style={{ width: 50, height: 50, borderRadius: 100}}
            resizeMode="cover"
          />
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {user.fullname}
            </Text>
            <Text style={{ fontSize: 18 }}>{user.typeofaccount}</Text>
          </View>
        </View>
        <Image source={require("../../assets/suntoggle.png")} />
      </View>
      <View style={{ backgroundColor: "#FAFBFD", paddingHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 25,
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "70%" }}>
            <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 8 }}>
              Good Morning, {user.username}
            </Text>
            <Text style={{ fontSize: 18 }}>
              Check all your incoming and outgoing transactions here
            </Text>
          </View>
          <Image
            source={require("../../assets/Sun.png")}
            style={{ width: 81, height: 77 }}
          />
        </View>

        <View style={styles.accountnumber}>
          <Text style={{ color: "#fff", fontSize: 18 }}>Account No.</Text>
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
            {user.account_number}
          </Text>
        </View>

        <View style={styles.balancebox}>
          <View>
            <Text style={{ fontSize: 20 }}>Balance</Text>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Rp {user.balance.toLocaleString("id-ID")}
            </Text>
          </View>
          <View>
            <View style={{ gap: 20 }}>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#19918F",
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome6 size={18} name="add" color={"#fff"} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#19918F",
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome size={18} name="send" color={"#fff"} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <ScrollView
          style={{
            flex: 1,
            backgroundColor: "#fff",
            marginTop: 40,
            borderRadius: 10,
          }}
        >
          <TableTransactions/>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  balancebox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  accountnumber: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#19918F",
    marginTop: 30,
    marginBottom: 40,
    borderRadius: 10,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 12,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
  },
});
