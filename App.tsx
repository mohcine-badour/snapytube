import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import Header from './components/Header';
import { LinkIcon } from './components/icons/LinkIcon';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/montserrat.ttf'),
  });

  const handleMenuPress = () => {
    // Handle menu button press
    console.log('Menu button pressed');
  };

  if (!fontsLoaded) {
    return null; // Or a loading screen
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={true} backgroundColor="transparent" />
      <ImageBackground 
        source={require('./assets/bg_image.png')} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.safeArea}>
          <Header onMenuPress={handleMenuPress} />
          <View style={styles.content}>
            <View style={styles.imageContainer}>
              <Image 
                source={require('./assets/bg_transparent.png')} 
                style={styles.transparentBackground}
                resizeMode="cover"
              />
              <Image 
                source={require('./assets/bg_download.png')} 
                style={styles.downloadImage}
                resizeMode="contain"
              />
              <TouchableOpacity style={styles.downloadButton} activeOpacity={0.8}>
                <Text style={styles.downloadButtonText}>Download</Text>
              </TouchableOpacity>
              <View style={styles.inputContainer}>
                <LinkIcon size={20} color="#666" style={styles.linkIcon} />
                <TextInput
                  style={styles.videoInput}
                  placeholder="Insert your video link here..."
                  placeholderTextColor="#666"
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1, // Ajouté pour que l'image couvre tout l'écran
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  imageContainer: {
    alignItems: 'center',
  },
  transparentBackground: {
  },
  downloadImage: {
    position: 'absolute',
    width: '100%',
    height: 400,
    zIndex: 2,
  },
  downloadButton: {
    position: 'absolute',
    backgroundColor: '#D23535',
    borderRadius: 27,
    width: 207,
    height: 51,
    zIndex: 3,
    bottom: 275,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 16,
    // fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  inputContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E2E6EA',
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 27,
    paddingHorizontal: 10,
    paddingVertical: 4,
    width: '90%',
    zIndex: 3,
    bottom: 350,
    alignSelf: 'center',
  },
  linkIcon: {
    marginRight: 10,
  },
  videoInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    fontFamily: 'Montserrat',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontFamily: 'Montserrat',
  },
});