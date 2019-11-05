import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native'
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  constructor(props){
    super(props)
  }

  renderTitle(){
    return(
      <View>
        <View style={styles.divider} />
        <Text>{this.props.text}</Text>
      </View>
    )
  }

  render(){
    return (
      <TouchableOpacity style={styles.card}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.subtitle}>{this.props.subtitle}</Text>
        {this.props.text?this.renderTitle():null}
      </TouchableOpacity>
    )
  }
}

Card.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string
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
    padding: 15
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 18,
  },
  divider:{
    alignSelf:'stretch',
    backgroundColor: '#595959',
    height:StyleSheet.hairlineWidth,
    marginVertical: 10
  }
})