import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TextInput } from 'react-native';
import Button from "./components/Button"
import Input from './components/Input';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <TextInput style={styles.inputEmail}
      placeholder='Email'
      placeholderTextColor='#aaa'/>

      <TextInput style={styles.inputPassword}
      placeholder='Password'
      placeholderTextColor='#aaa'
      secureTextEntry={true}/>

      <Button text="Login"/>
      <Input text = "Notes"/>

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
  inputEmail:{
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
  inputPassword:{
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 30,
    marginBottom: 80,
    backgroundColor: '#f9f9f9',
    fontsize: 16,
  },
});
