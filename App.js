import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StyelEleven from './components/StyleEleven';
import { useFonts } from "expo-font";
import MovieCard from './components/MovieCard';
import MovieCard2 from './components/MovieCard2';
import CustomUIComponent from './components/CustomUIComponent';

export default function App() {
  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });
  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <View style={styles.container}>
    <CustomUIComponent/>
    <MovieCard/>
    </View>
  );r
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
