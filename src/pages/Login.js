import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  AsyncStorage
} from 'react-native';
import api from '../services/api'

const login = async (email, password) => {
  console.log('passou')
  api.post('/api/me/oauth',{
    email,
    password
  }).then(async (val)=>{
    await AsyncStorage.setItem('token',val.token)
    await AsyncStorage.setItem('user',val.decode.data)
    
  }).catch((err)=>{
    alert(err.response.data.message)
  })

}

const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const pressLogin = ()=> {
    login(email, password)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={require('../assets/logotipo.png')}
        style={
          {height:250, width: 250}
        }
      />
      <View style={styles.form}>
        <Text style={styles.label}>Seu email</Text>
        <TextInput 
          style={styles.input}
          placeholder="Seu email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(val)=>setEmail(val)}
        ></TextInput>

        <Text style={styles.label}>Sua senha</Text>
        <TextInput 
          style={styles.input}
          secureTextEntry={true}
          placeholder="Sua senha"
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={(val)=>setPassword(val)}
        ></TextInput>
        <TouchableOpacity style={styles.btn} onPress={pressLogin}>
          <Text style={styles.btnLabel}>Logar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.form}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnLabel}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  label:{
    fontWeight:'bold',
    color:'#444',
    marginBottom: 8
  },
  form:{
    alignSelf:'stretch',
    paddingHorizontal: 15,
  },
  input:{
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
    color: '#444',
    paddingHorizontal: 5,
    height: 45,
    borderRadius: 2,
    marginBottom: 20
  },
  btn:{
    backgroundColor: 'rgb(35, 148, 172)',
    borderRadius: 2,
    padding: 5,
    alignItems:'center',
    justifyContent:'center',
    height: 45,
    marginBottom: 15
  },
  btnLabel:{
    fontSize: 16,
    color:'white',
    fontWeight: 'bold'
  },
  divider:{
    paddingHorizontal: 15,
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderColor:'#ddd',
    margin:10,
  }
});

export default App;
