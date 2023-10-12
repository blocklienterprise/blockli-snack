import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieCard2 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/spiderman_image.jpg")} // Replace with your image path
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Spiderman: Far From Home</Text>
        <Text style={styles.genreDuration}>Action/Adventure - 2h 9m</Text>
        <Text style={styles.rating}>5.4 Stars</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 349.377,
    height: 192,
    flexDirection: 'row',
    flexShrink: 0,
    borderRadius: 5.902,
    backgroundColor: '#FFF',
    shadowColor: 'rgba(138, 149, 158, 0.20)',
    shadowOffset: { width: 0, height: 11.80328 },
    shadowOpacity: 0.20,
    shadowRadius: 23.60656,
    elevation: 5, // This is for Android, as shadow props do not work for Android
    alignItems: 'center',
    paddingLeft: 20,
  },
  image: {
    width: 115.279,
    height: 160.525,
    flexShrink: 0,
    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, #000 129.87%)', // Note: React Native does not support backgroundImage prop for the Image component. You might need a library or a workaround to achieve this gradient effect.
  },
  textContainer: {
    marginLeft: 20,  // Adjust as needed for spacing between image and text
  },
  title: {
    width: 143.213,
    color: '#1D1D1D',
    //fontFamily: 'Inter',
    fontSize: 19.672,
    fontWeight: '700',
    letterSpacing: -0.401,
  },
  genreDuration: {
    color: 'rgba(138, 149, 158, 0.80)',
    //fontFamily: 'Inter',
    fontSize: 15.738,
    fontWeight: '500',
    letterSpacing: -0.334,
  },
  rating: {
    color: '#00CF99',
    //fontFamily: 'Inter',
    fontSize: 13.77,
    fontWeight: '400',
    lineHeight: 18.295,
    letterSpacing: -0.475,
  },
});

export default MovieCard2;
