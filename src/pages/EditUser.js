import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";

const EditUser = () => {
  
  const [isDateTimePickerVisible, setDateTimePickerVisible] = useState(false)

  const getDate = (date) => {
    console.log(date)
    setDateTimePickerVisible(false)
  }

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={styles.container}>
        <TextInput style={styles.title}>Editar conta</TextInput>
        <View style={styles.form}>
          <Text style={styles.label}>Nome Completo</Text>
          <TextInput 
            style={styles.input}
            placeholder="Nome Completo"
            autoCapitalize="words"
            autoCorrect={false}
          ></TextInput>

          <Text style={styles.label}>Data de nascimento</Text>
          <TouchableOpacity 
            style={[styles.input, {justifyContent:'center'}]}
            onPress={()=>setDateTimePickerVisible(true)}
          >
            <Text style={{color:'#b0b0b0'}}>01/01/2019</Text>
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
          ></TextInput>

          <Text style={styles.label}>Senha</Text>
          <TextInput 
            style={styles.input}
            secureTextEntry={true}
            placeholder="Senha"
            autoCapitalize="none"
            autoCorrect={false}
          ></TextInput>

          <Text style={styles.label}>CEP</Text>
          <TextInput 
            style={styles.input}
            placeholder="CEP"
            autoCapitalize="words"
            autoCorrect={false}
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
              ></TextInput>
            </View>
          </View>
          
          <Text style={styles.label}>Bairro</Text>
          <TextInput 
            style={styles.input}
            placeholder="Bairro"
            autoCapitalize="words"
            autoCorrect={false}
          ></TextInput>
          
          <View style={{flexDirection:'row', }}>
            <View style={{flexDirection:'column', flex:8, marginRight:5}}>
              <Text style={styles.label}>Rua/Avenida</Text>
              <TextInput 
                style={styles.input}
                placeholder="Rua/Avenida"
                autoCapitalize="words"
                autoCorrect={false}
              ></TextInput>
            </View>
            <View style={{flexDirection:'column', flex: 4}}>
              <Text style={styles.label}>Nº</Text>
              <TextInput 
                style={styles.input}
                placeholder="Nº"
                autoCapitalize="words"
                autoCorrect={false}
              ></TextInput>
            </View>
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnLabel}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

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

export default EditUser;
