import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TextInput } from 'react-native';
import Button from "../components/Button"
// import Input from '../components/Input';
import { Link, useRouter } from 'expo-router';

export default function App() {
  const router = useRouter()

  const handleLogin = () =>{
    router.push("/(home)")
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <TextInput marginBottom = '15' style={styles.input}
      placeholder='Email'
      placeholderTextColor='#aaa'/>

      <TextInput marginBottom ='80' style={styles.input}
      placeholder='Password'
      placeholderTextColor='#aaa'
      secureTextEntry={true}/>

      <Button text="Login" onPress = {handleLogin}/>

      {/* <Input text = "Notes"/> */}
      <Text marginTop='15'>Don't have account?
        <Link href="/register" style={styles.register}> Register here</Link>
      </Text>

      <StatusBar style='auto'/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  logo:{
    marginBottom: 100,
  },
  input:{
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 30,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    fontsize: 16,
  },
  register:{
    color: '#19918f',
  },
});
