import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Picker
} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import api from '../services/api';

const loadAgreements = async ()=>{
  const res= await api.get('/api/agreement/all')
  return res.data
}

const CreateUser = ({navigation}) => {
  const [isDateTimePickerVisible, setDateTimePickerVisible] = useState(false)
  const [name, setName] = useState()
  const [birthDay, setBirthDay] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [CEP, setCEP] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [neighborhood, setNeighborhood] = useState()
  const [street, setStreet] = useState()
  const [number, setNumber] = useState()
  const [agreement, setAgreement] = useState()
  const [agreements, setAgreements] = useState([])
  // const [name, setName] = useState()

  const getDate = (date) => {
    console.log(date)
    setDateTimePickerVisible(false)
    setBirthDay(date)
  }

  const createAcc = async ()=> {
    try {
      const data = {
        "email":email,
        "password":password, 
        "name":name,
        "birthDay":birthDay,
        "agreement":agreement,
        "address":{
          "state":state,
          "city":city,
          "street":street,
          "number":number,
          "neighborhood":neighborhood,
          "zip":CEP
        }
      }
      const res = await api.post('/api/me/',data)
      await AsyncStorage.setItem('token',res.data.token)
      await AsyncStorage.setItem('user',res.data.decode.data)
    } catch (error) {
      alert(error.response.data.message)
    }
    
  }

  const loadCep = async (val) => {
    try {
      if(val.length != 8) return
      const res = await api.viaCep(val)
      setCity(res.data.localidade)
      setState(res.data.uf)
      setStreet(res.data.logradouro)
      setNeighborhood(res.data.bairro)
    } catch (error) {
      
    }
  }

  const getBirthText = ()=>{
    if(!birthDay) return ''
    const day = birthDay.getDate() > 9?birthDay.getDate():`0${birthDay.getDate()}`
    const month = (birthDay.getMonth()+1) > 9?birthDay.getMonth()+1:`0${birthDay.getMonth()+1}`
    return `${day}/${month}/${birthDay.getFullYear()}`
  }

  useEffect(()=>{
    loadAgreements().then((val)=>setAgreements(val))
  },[])

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={styles.container}>
        <TextInput style={styles.title}>Cadastre-se</TextInput>
        <View style={styles.form}>
          <Text style={styles.label}>Nome Completo</Text>
          <TextInput 
            style={styles.input}
            placeholder="Nome Completo"
            autoCapitalize="words"
            autoCorrect={false}
            onChangeText={(val)=>setName(val)}
            value={name}
          ></TextInput>

          <Text style={styles.label}>Data de nascimento</Text>
          <TouchableOpacity 
            style={[styles.input, {justifyContent:'center'}]}
            onPress={()=>setDateTimePickerVisible(true)}
          >
            <Text style={{color:'#b0b0b0'}}>{getBirthText()}</Text>
          </TouchableOpacity>
          <DateTimePicker
            isVisible={isDateTimePickerVisible}
            onConfirm={(date)=>getDate(date)}
            onCancel={()=>setDateTimePickerVisible(false)}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput 
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(val)=>setEmail(val)}
            value={email}
          ></TextInput>

          <Text style={styles.label}>Senha</Text>
          <TextInput 
            style={styles.input}
            secureTextEntry={true}
            placeholder="Senha"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(val)=>setPassword(val)}
            value={password}
          ></TextInput>

          <Text style={styles.label}>CEP</Text>
          <TextInput 
            style={styles.input}
            placeholder="CEP"
            autoCapitalize="words"
            autoCorrect={false}
            onChangeText={(val)=>{
              setCEP(val)
              loadCep(val)
            }}
            value={CEP}
          ></TextInput>
          <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'column', flex:8, marginRight:5}}>
              <Text style={styles.label}>Cidade</Text>
              <TextInput 
                style={styles.input}
                placeholder="Cidade"
                autoCapitalize="words"
                autoCorrect={false}
                editable = {false}
                onChangeText={(val)=>setCity(val)}
                value={city}
              ></TextInput>
            </View>
            <View style={{flexDirection:'column', flex:4}}>
              <Text style={styles.label}>Estado</Text>
              <TextInput 
                style={styles.input}
                placeholder="Estado"
                autoCapitalize="words"
                autoCorrect={false}
                editable = {false}
                onChangeText={(val)=>setState(val)}
                value={state}
              ></TextInput>
            </View>
          </View>
          
          <Text style={styles.label}>Bairro</Text>
          <TextInput 
            style={styles.input}
            placeholder="Bairro"
            autoCapitalize="words"
            autoCorrect={false}
            onChangeText={(val)=>setNeighborhood(val)}
            value={neighborhood}
          ></TextInput>
          
          <View style={{flexDirection:'row', }}>
            <View style={{flexDirection:'column', flex:8, marginRight:5}}>
              <Text style={styles.label}>Rua/Avenida</Text>
              <TextInput 
                style={styles.input}
                placeholder="Rua/Avenida"
                autoCapitalize="words"
                autoCorrect={false}
                onChangeText={(val)=>setStreet(val)}
                value={street}
              ></TextInput>
            </View>
            <View style={{flexDirection:'column', flex: 4}}>
              <Text style={styles.label}>Nº</Text>
              <TextInput 
                style={styles.input}
                placeholder="Nº"
                autoCapitalize="words"
                autoCorrect={false}
                onChangeText={(val)=>setNumber(val)}
                value={number}
              ></TextInput>
            </View>
          </View>

          <Text style={styles.label}>Convenio</Text>
          <Picker 
            style={styles.input}
            selectedValue={agreement}
            onValueChange={(val, id)=>setAgreement(val)}
          >
            {agreements.map((val, i)=>(
              <Picker.Item key={i} label={val.name} value={val._id} />
            ))}
            
          </Picker>

          <TouchableOpacity style={styles.btn} onPress={createAcc}>
            <Text style={styles.btnLabel} onPress={() => navigation.navigate('Home')}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

CreateUser.navigationOprions = {
  title: 'Cadastro'
}

const styles = StyleSheet.create({
  title:{
    fontSize: 43
  },
  container:{
    flex: 1,
    alignItems: 'center',
  },

  label:{
    fontWeight:'bold',
    color:'#444',
    marginBottom: 8
  },
  form:{
    alignSelf:'stretch',
    paddingHorizontal: 15,
    marginTop: 15
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

export default CreateUser;
