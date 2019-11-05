import React from 'react';
import {
  StyleSheet,
  TextInput
} from 'react-native'
import PropTypes from 'prop-types';

export default class SearchInput extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <TextInput style={styles.card} placeholder="Buscar...">
      </TextInput>
    )
  }
}

SearchInput.propTypes = {
  onPress: PropTypes.func,
}

const styles = StyleSheet.create({
  card:{
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * 5 },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * 5,
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 5
  }
})