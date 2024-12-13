import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TextInput } from 'react-native';
import Button from "../components/Button"
// import Input from '../components/Input';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <TextInput marginBottom = '10' style={styles.input}
      placeholder='Fullname'
      placeholderTextColor='#aaa'/>

      <TextInput marginBottom = '10' style={styles.input}
      placeholder='Email'
      placeholderTextColor='#aaa'/>

      <TextInput marginBottom = '10' style={styles.input}
      placeholder='Password'
      placeholderTextColor='#aaa'/>

      <TextInput marginBottom = '80' style={styles.input}
      placeholder='Avatar Url'
      placeholderTextColor='#aaa'
      secureTextEntry={true}/>

      <Button text="Register"/>

      {/* <Input text = "Notes"/> */}
      <Text marginTop='15'>Already have account?
        <Link href="/" style={styles.register}> Login here</Link>
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
    backgroundColor: '#f9f9f9',
    fontsize: 16,
  },
  register:{
    color: '#19918f',
  },
});
