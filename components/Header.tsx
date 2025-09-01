import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuIcon } from './icons/MenuIcon';

interface HeaderProps {
  onMenuPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuPress }) => {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/newLogo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      
      <TouchableOpacity 
        style={styles.menuButton} 
        onPress={onMenuPress}
        activeOpacity={0.7}
      >
        <MenuIcon width={24} height={18} color="#ffffff" style={{}} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 50, // Extra padding for status bar
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: 120,
    height: 30,
  },
  menuButton: {
    padding: 8,
    borderRadius: 8,
  },
});

export default Header;
