import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import DrawerContent from './components/DrawerContent';

const Drawer = createDrawerNavigator();

function HomeScreenWrapper({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={true} backgroundColor="transparent" />
      <Header navigation={navigation} />
      <HomeScreen />
    </View>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/montserrat.ttf'),
    'Montserrat-Bold': require('./assets/fonts/montserratbold.ttf'),
    'Redacted': require('./assets/fonts/redacted.ttf'),
    'Raleway': require('./assets/fonts/raleway.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Or a loading screen
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: '#1a1a1a',
            width: 280,
          },
          drawerActiveTintColor: '#D23535',
          drawerInactiveTintColor: '#fff',
          drawerPosition: 'right',
        }}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeScreenWrapper}
          options={{
            drawerLabel: 'Home',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});