import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


export default function Amount({ showBalance = false, marginTop=0, marginBottom=0 }) {
    const [balance, setBalance] = useState(0);
    const [user, setUser] = useState(null);
    const [amount, setAmount] = useState("");
    
   
    useEffect(() => {
        const getData = async () => {
            try {
                const token = await AsyncStorage.getItem("token");
                if (token !== null) {
                    const res = await axios.get("http://192.168.30.96:8080/profile", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    const user = res.data.data;
                    setUser(user);
                
                    setBalance(user.wallet.balance);
                }
            } catch (e) {
                console.log(e);
            }
        };
        getData();
    }, []);

    return (
        <View style={{...styles.container, marginTop: marginTop, marginBottom: marginBottom }}>
            <Text style={{ color: '#b3b3b3' }}>Amount</Text>
            <View style={styles.money}>
                <Text style={styles.idr}>IDR</Text>
                {/* <TextInput style={styles.input} placeholder="100.000" keyboardType="number-pad"/> */}
                <TextInput
                style={styles.input}
                keyboardType="number-pad"
                placeholder="100.000"
                value={amount}
                onChangeText={setAmount}
            />
            </View>
            {showBalance && user &&
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                    <Text style={{ color: '#b3b3b3' }}>Balance </Text>
                    <Text style={{ color: '#19918F' }}>IDR {balance}</Text>
                </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%',
        backgroundColor: 'white'
    },
    input: {
        fontSize: 40
    },
    money: { flexDirection: 'row', borderBottomColor: '#b3b3b3', borderBottomWidth: 0.5 },
    idr: { fontSize: 16, marginRight: 12, marginTop: 12 }
});