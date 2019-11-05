import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import Card from '../components/Card'
import SearchInput from '../components/SearchInput'

const SearchPage = ()=> {
  
  const results = [
    'OPA'
  ]
  const categories = [
    'Psicologia',
    'Clinico geral',
    'Et'
  ]

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Buscar</Text>
      <SearchInput />
      {
        results.length>0?<Text style={styles.title}>Resultados</Text>:null
      }
      <Card title="HEEEi" subtitle="SUBS" text="HEEEiiii" />
      <Text style={styles.title}>Ultima Busca</Text>
      <TouchableOpacity style={[styles.lastSearch, {flexDirection:'row'}]}>
        <Image style={{width:20, height:20, marginRight: 5}} source={{uri:'https://facebook.github.io/react-native/img/tiny_logo.png'}} />
        <Text style={styles.lastSearchText}>Psicologia</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Categorias</Text>
      <View style={styles.categoryList}>
        {categories.map((val, i)=>(
          <TouchableOpacity key={i} style={styles.categoryBox}>
            <Text style={{color:'white'}}>{val}</Text> 
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 15
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 15
  },
  lastSearch:{
    alignItems:'baseline',
    marginBottom: 15
    
  },
  lastSearchText:{
    fontSize:20,
    color:'#787878'
  },
  categoryList:{
    flexWrap: 'wrap',
    flexDirection:'row',
  },
  categoryBox:{
    width:'45%',
    alignItems:'center',
    justifyContent: 'center',
    padding: 15,
    marginHorizontal: '2%',
    marginBottom: 15,
    backgroundColor: 'rgb(35, 148, 172)',
    borderRadius: 5
  }
})

module.exports = SearchPage