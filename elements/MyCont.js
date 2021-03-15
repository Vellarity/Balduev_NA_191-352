import React from 'react';
import { StyleSheet, Image } from 'react-native';

class CustomMarker extends React.Component {
  render() {
    return (
      <Image
        style={styles.image}
        source={require('../assets/treu.png')}
        resizeMode="contain"
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 25,
    borderRadius:500,
    marginTop:3
  },
});

export default CustomMarker;