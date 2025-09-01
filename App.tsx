import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import Header from './components/Header';
import { LinkIcon } from './components/icons/LinkIcon';
import { FacebookIcon, InstagramIcon, YouTubeIcon, TikTokIcon, SeparatorIcon, ArrowIcon } from './components/icons/SocialIcons';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/montserrat.ttf'),
    'Montserrat-Bold': require('./assets/fonts/montserratbold.ttf'),
    'Redacted': require('./assets/fonts/redacted.ttf'),
    'Raleway': require('./assets/fonts/raleway.ttf'),
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
              <Text style={styles.supportedPlatformsText}>Supported Platforms:</Text>
              <View style={styles.socialIconsContainer}>
                <FacebookIcon size={24} color="#B4B4B4" />
                <SeparatorIcon size={3} color="#B4B4B4" />
                <InstagramIcon size={24} color="#B4B4B4" />
                <SeparatorIcon size={3} color="#B4B4B4" />
                <YouTubeIcon size={28} color="#B4B4B4" />
                <SeparatorIcon size={3} color="#B4B4B4" />
                <TikTokIcon size={24} color="#B4B4B4" />
              </View>
              <View style={styles.arrowIconContainer}>
                <ArrowIcon size={30} color="#B4B4B4" />
              </View>
              <View style={styles.freeSocialContainer}>
                <Text style={styles.freeText}>Free</Text>
                <View style={styles.socialMediaBadge}>
                  <Text style={styles.socialMediaText}>Social Media</Text>
                </View>
              </View>
              <Text style={styles.videoDownloaderText}>Video Downloader</Text>
              <Text style={styles.appNameText}>Snapytube</Text>
              <Text style={styles.ultimateText}>Your Ultimate</Text>
              <Text style={styles.downloaderText}>Downloader</Text>
              <Text style={styles.descriptionText}>
                Snapytube lets you download videos instantly with speed and ease. No hassle—just seamless, uninterrupted entertainment at your fingertips!
              </Text>
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
  supportedPlatformsText: {
    position: 'absolute',
    color: '#E2E6EA',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Raleway',
    zIndex: 3,
    bottom: 220,
    alignSelf: 'center',
    width: '85%',
  },
  socialIconsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
    bottom: 180,
    alignSelf: 'center',
    width: '85%',
    gap: 20,
  },
  arrowIconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
    bottom: 120,
    alignSelf: 'center',
  },
  freeSocialContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
    bottom: 80,
    alignSelf: 'center',
    gap: 10,
  },
  freeText: {
    color: '#C5C5C5',
    fontSize: 14,
    fontFamily: 'Montserrat',
  },
  socialMediaBadge: {
    backgroundColor: '#D23535',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 14.57,
    transform: [{ rotate: '-3.05deg' }],
  },
  socialMediaText: {
    color: '#fff',
    fontSize: 12.44,
    fontFamily: 'Raleway',
    transform: [{ rotate: '3.05deg' }],
  },
  videoDownloaderText: {
    position: 'absolute',
    color: '#E2E6EA',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    zIndex: 3,
    bottom: 50,
    alignSelf: 'center',
    width: '85%',
  },
  appNameText: {
    position: 'absolute',
    color: '#fff',
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Redacted',
    zIndex: 3,
    bottom: 620,
    alignSelf: 'center',
    width: '85%',
  },
  ultimateText: {
    position: 'absolute',
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontStyle: 'italic',
    zIndex: 3,
    bottom: 570,
    alignSelf: 'center',
    width: '85%',
  },
  downloaderText: {
    position: 'absolute',
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    zIndex: 3,
    bottom: 540,
    alignSelf: 'center',
    width: '85%',
  },
  descriptionText: {
    position: 'absolute',
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    // textShadowColor: 'rgba(0, 0, 0, 0.75)',
    // textShadowOffset: { width: -1, height: 1 },
    // textShadowRadius: 10,
    fontFamily: 'Montserrat',
    zIndex: 3,
    bottom: 420,
    alignSelf: 'center',
    width: '85%',
    lineHeight: 22,
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