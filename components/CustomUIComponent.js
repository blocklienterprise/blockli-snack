import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CustomUIComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.upperRectangle}>
      <View style={styles.ovalTextContainer}>
        <View style={styles.oval} />
        <View>
            <Text style={styles.rockstarText}>Rockstar DJ Barban</Text>
            <Text style={styles.djBarbanText}>DJ Barban</Text>
        </View>
        </View>
        <Text style={styles.sheHitMeText}>She hit me on the facetime just to check up on me and my brother</Text>
        </View>


      <View style={styles.lowerRectangle}>
        <View style={styles.imageRow}>
          <Image source={require("../assets/music-art.png")} style={styles.imageStyle} />
          <Image source={require("../assets/music-art.png")} style={styles.imageStyle} />
          <Image source={require("../assets/music-art.png")} style={styles.imageStyle} />
          <Image source={require("../assets/music-art.png")} style={styles.imageStyle} />
        </View>
        <View style={styles.imageRow}>
          <Image source={require("../assets/music-art.png")} style={styles.imageStyle} />
          <Image source={require("../assets/music-art.png")} style={styles.imageStyle} />
          <Image source={require("../assets/music-art.png")} style={styles.imageStyle} />
          <Image source={require("../assets/music-art.png")} style={styles.imageStyle} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
      width: 340.914,
      height: 314,
      alignItems: 'center',
    },
    upperRectangle: {
      width: 340.914,
      height: 129,
      backgroundColor: '#4F50FB',
      borderTopLeftRadius: 4.806,
      borderTopRightRadius: 4.806,
      shadowOffset: { width: 0, height: 9.61224 },
      shadowOpacity: 0.2,
      shadowColor: 'rgba(138, 149, 158, 0.20)',
      shadowRadius: 19.22449,
      paddingLeft: 10,
      justifyContent: 'space-between', 
      paddingTop: 5,
      paddingBottom: 15,
    },
    ovalTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    oval: {
      width: 31.4,
      height: 31.4,
      backgroundColor: '#FFF',
      borderRadius: 15.7,
      shadowOffset: { width: 0, height: 2.563265323638916 },
      shadowOpacity: 0.38,
      shadowColor: 'rgba(8, 6, 135, 0.38)',
      shadowRadius: 4.806122303009033,
      marginRight: 5,
    },
    rockstarText: {
      color: '#FFF',
      fontSize: 8.651,
      fontWeight: 'bold',
      letterSpacing: 0.174,
    },
    djBarbanText: {
      color: '#FFF',
      fontSize: 8.651,
      letterSpacing: 0.174,
    },
    sheHitMeText: {
      color: '#FFF',
      fontSize: 20.827,
      fontWeight: 'bold',
      letterSpacing: -0.633,
      lineHeight: 24.351,
    },
    lowerRectangle: {
      width: 340.914,
      height: 184.876,
      backgroundColor: '#6162FF',
      borderBottomLeftRadius: 4.806,
      borderBottomRightRadius: 4.806,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageStyle: {
      width: 71.131,
      height: 71.131,
      borderRadius: 13.778,
      backgroundColor: 'lightgray',
      margin: 5,
    },
    imageRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
  
export default CustomUIComponent;
