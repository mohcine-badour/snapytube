import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const PrivacyScreen: React.FC = () => {
  const privacyContent = [
    {
      title: '1. Information We Collect',
      content: 'We collect information you provide directly to us, such as when you use our video downloading service. This may include video URLs, download preferences, and app usage data. We do not collect personal information like names, emails, or phone numbers unless you explicitly provide them.'
    },
    {
      title: '2. How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our video downloading service. This includes processing download requests, optimizing app performance, and ensuring the service works correctly on your device. We do not use your information for advertising or marketing purposes.'
    },
    {
      title: '3. Data Storage and Security',
      content: 'Your downloaded videos are stored locally on your device. We implement appropriate security measures to protect any data transmitted through our service. However, we cannot guarantee the security of information transmitted over the internet or stored on your device.'
    },
    {
      title: '4. Third-Party Services',
      content: 'Our app may interact with third-party services (like social media platforms) to download videos. These services have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of these third-party services.'
    },
    {
      title: '5. Data Sharing and Disclosure',
      content: 'We do not sell, trade, or otherwise transfer your information to third parties. We may share information only in the following circumstances: when required by law, to protect our rights and safety, or with your explicit consent.'
    },
    {
      title: '6. Data Retention',
      content: 'We retain your download history and preferences only as long as necessary to provide our service. Downloaded videos remain on your device until you delete them. You can clear your download history through the app settings at any time.'
    },
    {
      title: '7. Your Rights and Choices',
      content: 'You have the right to access, correct, or delete your information. You can manage your privacy settings within the app, including clearing cache, managing download history, and adjusting notification preferences. You can also uninstall the app to remove all associated data.'
    },
    {
      title: '8. Children\'s Privacy',
      content: 'Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.'
    },
    {
      title: '9. International Data Transfers',
      content: 'Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and that your information receives adequate protection.'
    },
    {
      title: '10. Changes to This Policy',
      content: 'We may update this Privacy Policy from time to time. We will notify you of any material changes through the app or our website. Your continued use of the service after changes constitutes acceptance of the updated policy.'
    },
    {
      title: '11. Contact Us',
      content: 'If you have questions about this Privacy Policy or our data practices, please contact us through the app or visit our website. We are committed to addressing your privacy concerns and will respond to your inquiries promptly.'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
        <Text style={styles.headerSubtitle}>Last updated: January 2024</Text>
      </View>
      
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <Text style={styles.introText}>
            At Snapytube, we are committed to protecting your privacy and ensuring transparency about how we handle your information. This Privacy Policy explains our data practices and your rights regarding your personal information.
          </Text>
          
          {privacyContent.map((section, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <Text style={styles.sectionContent}>{section.content}</Text>
            </View>
          ))}
          
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              By using Snapytube, you acknowledge that you have read and understood this Privacy Policy and consent to our data practices as described herein.
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
  introText: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    color: '#fff',
    lineHeight: 24,
    marginBottom: 30,
    textAlign: 'justify',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: '#D23535',
    marginBottom: 12,
    lineHeight: 22,
  },
  sectionContent: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: '#ccc',
    lineHeight: 22,
    textAlign: 'justify',
  },
  footer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#D23535',
  },
  footerText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default PrivacyScreen;
