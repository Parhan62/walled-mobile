import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require('./assets/logo.png')} />
      <TextInput style={styles.input}
      placeholder='Email'
      placeholderTextColor='#aaa'/>

      <TextInput style={styles.input}
      placeholder='Password'
      placeholderTextColor='#aaa'
      secureTextEntry={true}/>

      <TouchableOpacity style={styles.input}>
        <Text style={styles.buttonText}>
          Login
        </Text>
      </TouchableOpacity>

      <StatusBar style='auto'/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  logo:{

  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input:{
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    fontsize: 16,
  },
  button:{
    backgroundColor: '#4DB6AC',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    width: '100%',
    alightnItems: 'center',
  },

  buttonText:{
    color:'#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }

});
