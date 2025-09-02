import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const TermsScreen: React.FC = () => {
  const termsContent = [
    {
      title: '1. Acceptance of Terms',
      content: 'By downloading, installing, or using Snapytube, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.'
    },
    {
      title: '2. Description of Service',
      content: 'Snapytube is a video downloading application that allows users to download videos from various social media platforms. The service is provided "as is" and we make no warranties about the availability or functionality of the service.'
    },
    {
      title: '3. User Responsibilities',
      content: 'You are responsible for ensuring that you have the right to download any content. You must comply with all applicable laws and respect intellectual property rights. You may not use the service for illegal purposes or to download copyrighted content without permission.'
    },
    {
      title: '4. Content Usage',
      content: 'Downloaded content is for personal use only. You may not redistribute, sell, or use the content for commercial purposes without proper authorization. You are responsible for the content you download and how you use it.'
    },
    {
      title: '5. Privacy and Data',
      content: 'We respect your privacy and are committed to protecting your personal information. Our Privacy Policy explains how we collect, use, and safeguard your data. By using the service, you consent to our data practices as described in our Privacy Policy.'
    },
    {
      title: '6. Service Availability',
      content: 'We strive to provide reliable service but cannot guarantee uninterrupted access. The service may be temporarily unavailable due to maintenance, updates, or technical issues. We reserve the right to modify or discontinue the service at any time.'
    },
    {
      title: '7. Limitation of Liability',
      content: 'Snapytube and its developers are not liable for any damages arising from the use of the service, including but not limited to data loss, device damage, or any other consequential damages. The service is provided without warranties of any kind.'
    },
    {
      title: '8. Updates and Modifications',
      content: 'These terms may be updated from time to time. We will notify users of significant changes through the application or our website. Continued use of the service after changes constitutes acceptance of the new terms.'
    },
    {
      title: '9. Termination',
      content: 'We may terminate or suspend your access to the service at any time for violations of these terms or for any other reason. You may also stop using the service at any time by uninstalling the application.'
    },
    {
      title: '10. Governing Law',
      content: 'These terms are governed by the laws of the jurisdiction in which the service is provided. Any disputes will be resolved in accordance with applicable laws and regulations.'
    },
    {
      title: '11. Contact Information',
      content: 'If you have questions about these terms or the service, please contact us through the application or visit our website for more information.'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Terms of Service</Text>
        <Text style={styles.headerSubtitle}>Last updated: January 2024</Text>
      </View>
      
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <Text style={styles.introText}>
            Welcome to Snapytube. These Terms of Service govern your use of our video downloading application. Please read them carefully before using the service.
          </Text>
          
          {termsContent.map((section, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <Text style={styles.sectionContent}>{section.content}</Text>
            </View>
          ))}
          
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              By using Snapytube, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
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

export default TermsScreen;
