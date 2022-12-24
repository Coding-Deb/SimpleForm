import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios'

export default function App() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    const login = {
      name, email, password
    }
    axios.post('http://192.168.45.210:5000/api/login',login)
    .then(res=> console.log(res.data))
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder='Your Name' value={name} onChangeText={(val) => { setname(val) }} style={{ borderColor: 'black', fontSize: 18, fontWeight: '600', borderWidth: 2, padding: 15, margin: 12, height: 55, width: 300 }} />
      <TextInput placeholder='Your Email' value={email} onChangeText={(val) => { setemail(val) }} style={{ borderColor: 'black', fontSize: 18, fontWeight: '600', borderWidth: 2, padding: 15, margin: 12, height: 55, width: 300 }} />
      <TextInput placeholder='Enter Password' secureTextEntry={true} value={password} onChangeText={(val) => { setpassword(val) }} style={{ borderColor: 'black', fontSize: 18, fontWeight: '600', borderWidth: 2, padding: 15, margin: 12, height: 55, width: 300 }} />

      <TouchableOpacity style={{ backgroundColor: 'blue', padding: 15, margin: 10, height: 60, width: 150, justifyContent: 'center', alignItems: 'center' }} onPress={handleSubmit}>
        <Text style={{ fontSize: 18, fontWeight: '700', color: 'white' }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
