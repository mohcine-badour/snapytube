import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsIcon } from './icons/SettingsIcon';
import { DownloadIcon } from './icons/DownloadIcon';
import { TermsIcon } from './icons/TermsIcon';
import { PrivacyIcon } from './icons/PrivacyIcon';
import { AboutIcon } from './icons/AboutIcon';

interface DrawerContentProps {
  navigation: any;
}

const DrawerContent: React.FC<DrawerContentProps> = ({ navigation }) => {
  const menuItems = [
    { name: 'Download History', icon: null, customIcon: 'download' },
    { name: 'Settings', icon: null, customIcon: 'settings' },
    { name: 'Terms', icon: null, customIcon: 'terms' },
    { name: 'Privacy', icon: null, customIcon: 'privacy' },
    { name: 'About', icon: null, customIcon: 'about' },
  ];

  const handleMenuItemPress = (itemName: string) => {
    // Handle menu item press
    console.log(`${itemName} pressed`);
    
    if (itemName === 'Download History') {
      navigation.navigate('DownloadHistory');
    } else if (itemName === 'Settings') {
      // Navigate to Settings screen when implemented
      console.log('Settings navigation not implemented yet');
    } else if (itemName === 'Terms') {
      // Navigate to Terms screen when implemented
      console.log('Terms navigation not implemented yet');
    } else if (itemName === 'Privacy') {
      // Navigate to Privacy screen when implemented
      console.log('Privacy navigation not implemented yet');
    } else if (itemName === 'About') {
      // Navigate to About screen when implemented
      console.log('About navigation not implemented yet');
    }
    
    navigation.closeDrawer();
  };

  return (
    <ImageBackground 
      source={require('../assets/bg_image.png')} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <DrawerContentScrollView style={styles.container}>
        <View style={styles.header}>
          <Image 
            source={require('../assets/newLogo.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
          {/* <Text style={styles.appName}>Snapytube</Text> */}
        </View>
        
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => handleMenuItemPress(item.name)}
              activeOpacity={0.7}
            >
              {item.customIcon === 'settings' ? (
                <SettingsIcon size={20} color="#ffffff" />
              ) : item.customIcon === 'download' ? (
                <DownloadIcon size={20} color="#ffffff" />
              ) : item.customIcon === 'terms' ? (
                <TermsIcon size={20} color="#ffffff" />
              ) : item.customIcon === 'privacy' ? (
                <PrivacyIcon size={20} color="#ffffff" />
              ) : item.customIcon === 'about' ? (
                <AboutIcon size={20} color="#ffffff" />
              ) : (
                <Text style={styles.menuIcon}>{item.icon}</Text>
              )}
              <Text style={styles.menuText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
      </DrawerContentScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
    // borderBottomWidth: 0.5,
    // borderBottomColor: '#FFF',
  },
  logo: {
    width: 100,
    height: 25,
    marginBottom: 10,
  },
  appName: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
  },
  menuContainer: {
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: '#FFF',
  },
  menuIcon: {
    fontSize: 20,
    // marginRight: 10,
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat',
    marginLeft: 10,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    marginTop: 'auto',
  },
  footerText: {
    color: '#666',
    fontSize: 12,
    fontFamily: 'Montserrat',
  },
});

export default DrawerContent;
