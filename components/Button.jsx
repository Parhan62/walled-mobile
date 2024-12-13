import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { Link } from "expo-router"

function Button({bgColor = "#19918F", text}){
    return(
        <TouchableOpacity style={{...styles.button, backgroundColor: bgColor}}
        onPress={()=> <Link href="/home"></Link>}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#4DB6AC',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15,
        width: '100%',
        alignItems: 'center',
      },
    
      buttonText:{
        color:'#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
    })

    export default Button