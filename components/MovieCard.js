import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const StarIcon = () => (
  <Svg width="15" height="14" viewBox="0 0 16 15">
    <Path
      d="M12.7247 14.9596C12.1928 15.3364 8.77989 12.9475 8.12625 12.9423C7.47261 12.9371 4.02126 15.271 3.49555 14.8857C2.96985 14.5004 4.20576 10.5427 4.0088 9.9245C3.81182 9.30629 0.507405 6.77179 0.714407 6.15682C0.92141 5.54184 5.09818 5.48471 5.63009 5.10788C6.16199 4.73103 7.5711 0.830711 8.22474 0.835943C8.87838 0.841175 10.2239 4.76354 10.7496 5.14885C11.2753 5.53415 15.4506 5.65813 15.6475 6.27633C15.8445 6.89454 12.4993 9.37583 12.2923 9.9908C12.0853 10.6058 13.2566 14.5827 12.7247 14.9596V14.9596Z"
      fill="url(#paint0_linear_6_14)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_6_14"
        x1="0.705075"
        y1="14.9999"
        x2="15.6559"
        y2="14.9999"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCD635" />
        <Stop offset="1" stopColor="#F7A928" />
      </LinearGradient>
    </Defs>
  </Svg>
);

const renderStars = (rating) => {
  const numberOfStars = Math.round(rating);
  let stars = [];
  for (let i = 0; i < numberOfStars; i++) {
    stars.push(<StarIcon key={i} />);
  }
  return stars;
};

const MovieCard = () => {
  const rating = 5; // This can be dynamic
  return (
    <View style={styles.container}>
      <Image 
        source={require("../assets/spiderman_image.jpg")}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>
          Spiderman: Far From Home Spiderman: Far From Home
        </Text>
        <Text style={styles.genre}>Action/Adventure - 2h 9m</Text>
        <View style={styles.ratingContainer}>
          {renderStars(rating)}
          <Text style={styles.rating}>{rating} Stars</Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      width: 349.377,
      height: 192,
      borderRadius: 5.902,
      backgroundColor: '#FFF',
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
    },
    image: {
      width: 115.279,
      height: 160.525,
      flexShrink: 0,
      resizeMode: 'cover',
      backgroundColor: 'black' // This is a fallback to mimic the gradient for now.
    },
    textContainer: {
      marginLeft: 10,
      justifyContent: 'center',
    },
    title: {
      width: 143.213,
      color: '#1D1D1D',
      fontSize: 19.672,
      fontWeight: '700',
      letterSpacing: -0.401,
      marginVertical: 3
    },
    genre: {
      color: 'rgba(138, 149, 158, 0.80)',
      fontSize: 15.738,
      fontWeight: '500',
      letterSpacing: -0.334,
      marginVertical: 3
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    rating: {
      color: '#00CF99',
      fontSize: 13.77,
      fontWeight: '400',
      lineHeight: 18.295,
      letterSpacing: -0.475,
      marginLeft: 5, // For spacing between the star icon and the rating text.
      marginVertical: 3
    }
  });
  
  export default MovieCard;
  