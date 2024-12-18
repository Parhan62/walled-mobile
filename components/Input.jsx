import { View, StyleSheet, TextInput, Text } from "react-native"

export default function Input({text}){

    return(
        <View style={styles.container}>
            <Text style={styles.placeHolder}>{text}</Text>
            <TextInput style={styles.Input}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        padding: 10,
        width: '100%'
    },
    Input:{
        borderBottomColor:"#b3b3b3",
        borderBottomWidth: 0.5,
    },
    placeHolder:{
        color: '#b3b3b3',
    },
})
