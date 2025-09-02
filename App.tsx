import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import DownloadHistoryScreen from './components/DownloadHistoryScreen';
import SettingsScreen from './components/SettingsScreen';
import DrawerContent from './components/DrawerContent';
import { ModalProvider, useModal } from './components/ModalContext';
import DownloadModal from './components/DownloadModal';
import AlertModal from './components/AlertModal';

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

function AppContent() {
  const { 
    isDownloadModalVisible, 
    videoUrl, 
    videoThumbnail, 
    videoTitle, 
    hideDownloadModal,
    isAlertModalVisible,
    alertModalData,
    hideAlertModal
  } = useModal();

  return (
    <>
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
          <Drawer.Screen 
            name="DownloadHistory" 
            component={DownloadHistoryScreen}
            options={{
              drawerLabel: 'Download History',
            }}
          />
          <Drawer.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{
              drawerLabel: 'Settings',
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
      
      {/* Download Modal - Rendered at root level */}
      <DownloadModal
        isVisible={isDownloadModalVisible}
        onClose={hideDownloadModal}
        videoUrl={videoUrl}
        videoThumbnail={videoThumbnail}
        videoTitle={videoTitle}
      />

      {/* Alert Modal - Rendered at root level */}
      <AlertModal
        isVisible={isAlertModalVisible}
        onClose={hideAlertModal}
        title={alertModalData.title}
        message={alertModalData.message}
        confirmText={alertModalData.confirmText}
        cancelText={alertModalData.cancelText}
        onConfirm={alertModalData.onConfirm}
        type={alertModalData.type}
      />
    </>
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ModalProvider>
        <AppContent />
      </ModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});