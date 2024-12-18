import React, { useState } from "react";
import { View, StyleSheet, Alert, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Amount from "../../components/Amount";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Topup() {

    const navigation = useNavigation();

    const handleTopup = async () => {
        try {
            const token = await AsyncStorage.getItem("token");
            if (token !== null) {
                const res = await axios.post(
                    "http://192.168.30.96:8080/transactions/topup",
                    {
                        Amount,
                        Input
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log(res.data);
                Alert.alert("Success", "Top up successful");
                navigation.navigate("(home)");
            }
        } catch (e) {
            console.log(e);
            Alert.alert("Error", "Failed to top up");
        }
    };

    return (
        <View style={styles.container}>
            <Amount marginBottom={24} />
            <Input text={"Descriptions"} />
            {/* <Button text={"Top Up"} marginTop={150} onPress={handleTopup} /> */}
            <Button marginTop={150} handlePress={handleTopup} text="Top Up" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#fff",
    },

});
