import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';

const AboutScreen: React.FC = () => {
  const appInfo = {
    name: 'Snapytube',
    version: '1.0.0',
    buildNumber: '2024.01.001',
    description: 'A powerful and user-friendly video downloading application that supports multiple social media platforms. Download your favorite videos with ease and convenience.',
    features: [
      'Multi-platform video downloads',
      'High-quality video formats',
      'Fast and reliable service',
      'User-friendly interface',
      'Privacy-focused design',
      'Offline viewing capability'
    ],
    supportedPlatforms: [
      'YouTube',
      'Facebook',
      'Instagram',
      'TikTok',
      'Twitter',
      'LinkedIn'
    ]
  };

  const developerInfo = {
    company: 'BYHM Studio',
    website: 'https://byhmstudio.com',
    email: 'support@byhmstudio.com',
    copyright: '© 2024 BYHM Studio. All rights reserved.'
  };

  const handleLinkPress = (url: string) => {
    Linking.openURL(url).catch(err => console.error('Error opening URL:', err));
  };

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${developerInfo.email}`).catch(err => console.error('Error opening email:', err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>About</Text>
        <Text style={styles.headerSubtitle}>Learn more about Snapytube</Text>
      </View>
      
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          {/* App Logo and Basic Info */}
          <View style={styles.appInfoSection}>
            <Image 
              source={require('../assets/newLogo.png')} 
              style={styles.appLogo}
              resizeMode="contain"
            />
            <Text style={styles.appName}>{appInfo.name}</Text>
            <Text style={styles.appVersion}>Version {appInfo.version}</Text>
            <Text style={styles.appBuild}>Build {appInfo.buildNumber}</Text>
          </View>

          {/* App Description */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About Snapytube</Text>
            <Text style={styles.sectionContent}>{appInfo.description}</Text>
          </View>

          {/* Features */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Key Features</Text>
            <View style={styles.featuresContainer}>
              {appInfo.features.map((feature, index) => (
                <View key={index} style={styles.featureItem}>
                  <Text style={styles.featureBullet}>•</Text>
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Supported Platforms */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Supported Platforms</Text>
            <View style={styles.platformsContainer}>
              {appInfo.supportedPlatforms.map((platform, index) => (
                <View key={index} style={styles.platformItem}>
                  <Text style={styles.platformText}>{platform}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Developer Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Developer</Text>
            <Text style={styles.developerName}>{developerInfo.company}</Text>
            
            <TouchableOpacity 
              style={styles.linkContainer}
              onPress={() => handleLinkPress(developerInfo.website)}
              activeOpacity={0.7}
            >
              <Text style={styles.linkLabel}>Website:</Text>
              <Text style={styles.linkText}>{developerInfo.website}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.linkContainer}
              onPress={handleEmailPress}
              activeOpacity={0.7}
            >
              <Text style={styles.linkLabel}>Email:</Text>
              <Text style={styles.linkText}>{developerInfo.email}</Text>
            </TouchableOpacity>
          </View>

          {/* Legal Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Legal</Text>
            <Text style={styles.legalText}>
              This application is provided "as is" without warranties of any kind. 
              Users are responsible for ensuring they have the right to download 
              any content and must comply with applicable laws and platform terms of service.
            </Text>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>{developerInfo.copyright}</Text>
            <Text style={styles.footerSubtext}>
              Made with ❤️ by BYHM Studio
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    padding: 20,
    paddingTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: '#999',
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  appInfoSection: {
    alignItems: 'center',
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
  },
  appLogo: {
    width: 80,
    height: 20,
    marginBottom: 15,
  },
  appName: {
    fontSize: 28,
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    marginBottom: 8,
  },
  appVersion: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    color: '#D23535',
    marginBottom: 4,
  },
  appBuild: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: '#999',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#D23535',
    marginBottom: 15,
  },
  sectionContent: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    color: '#ccc',
    lineHeight: 24,
    textAlign: 'justify',
  },
  featuresContainer: {
    marginTop: 10,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  featureBullet: {
    fontSize: 16,
    color: '#D23535',
    marginRight: 10,
    marginTop: 2,
  },
  featureText: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    color: '#ccc',
    flex: 1,
    lineHeight: 22,
  },
  platformsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  platformItem: {
    backgroundColor: '#2a2a2a',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  platformText: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: '#fff',
  },
  developerName: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    marginBottom: 15,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  linkLabel: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    color: '#999',
    marginRight: 10,
    minWidth: 60,
  },
  linkText: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    color: '#D23535',
    textDecorationLine: 'underline',
  },
  legalText: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: '#999',
    lineHeight: 20,
    textAlign: 'justify',
  },
  footer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#D23535',
  },
  footerText: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: '#999',
    textAlign: 'center',
    marginBottom: 8,
  },
  footerSubtext: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    color: '#D23535',
    textAlign: 'center',
  },
});

export default AboutScreen;
