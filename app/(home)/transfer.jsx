import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Amount from "../../components/Amount";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Transfer() {
    const [accountNumber, setAccountNumber] = useState("");
    const [notes, setNotes] = useState("");
    const navigation = useNavigation();

    const handleTransfer = async () => {
        try {
            const token = await AsyncStorage.getItem("token");
            if (token !== null) {
                const res = await axios.post(
                    "http://192.168.30.96:8080/transactions/transfer",
                    {
                        accountNumber,
                        Amount,
                        notes,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log(res.data);
                Alert.alert("Success", "Transfer successful");
            
                navigation.navigate("(home)");
            }
        } catch (e) {
            console.log(e);
            Alert.alert("Error", "Failed to transfer");
        }
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#ddd" }}>
            <View
                style={{
                    backgroundColor: "#19918F",
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Text style={{ color: "#fff", fontSize: 18 }}>To:</Text>
                <TextInput
                    style={{ fontSize: 18 }}
                    keyboardType="number-pad"
                    placeholder="insert account number"
                    placeholderTextColor={"#fff"}
                    color={"#fff"}
                    onChangeText={setAccountNumber}
                />
            </View>
            <View style={styles.container}>
                <View>
                    <Amount showBalance={true} marginBottom={24} />
                    <Input text={"Notes"} onChangeText={setNotes} />
                </View>
                {/* <Button marginTop={240} marginBottom={20} text="Transfer" onPress={handleTransfer} /> */}
                <Button marginTop={240} marginBottom={20} handlePress={handleTransfer} text="Transfer" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "space-between",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#fff",
    },
});
