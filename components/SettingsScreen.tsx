import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { SettingsIcon } from './icons/SettingsIcon';

interface SettingsSection {
  title: string;
  items: SettingsItem[];
}

interface SettingsItem {
  id: string;
  title: string;
  subtitle?: string;
  type: 'toggle' | 'button' | 'info';
  value?: boolean;
  onPress?: () => void;
  onToggle?: (value: boolean) => void;
}

const SettingsScreen: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [autoDownload, setAutoDownload] = useState(false);
  const [highQualityDownloads, setHighQualityDownloads] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [dataSaver, setDataSaver] = useState(false);

  const settingsSections: SettingsSection[] = [
    {
      title: 'Download Settings',
      items: [
        {
          id: 'autoDownload',
          title: 'Auto Download',
          subtitle: 'Automatically download videos when added to queue',
          type: 'toggle',
          value: autoDownload,
          onToggle: setAutoDownload,
        },
        {
          id: 'highQuality',
          title: 'High Quality Downloads',
          subtitle: 'Download videos in highest available quality',
          type: 'toggle',
          value: highQualityDownloads,
          onToggle: setHighQualityDownloads,
        },
        {
          id: 'dataSaver',
          title: 'Data Saver',
          subtitle: 'Reduce data usage during downloads',
          type: 'toggle',
          value: dataSaver,
          onToggle: setDataSaver,
        },
      ],
    },
    {
      title: 'App Settings',
      items: [
        {
          id: 'notifications',
          title: 'Push Notifications',
          subtitle: 'Receive notifications for download status',
          type: 'toggle',
          value: notificationsEnabled,
          onToggle: setNotificationsEnabled,
        },
        {
          id: 'darkMode',
          title: 'Dark Mode',
          subtitle: 'Use dark theme for the app',
          type: 'toggle',
          value: darkMode,
          onToggle: setDarkMode,
        },
      ],
    },
    {
      title: 'Storage & Cache',
      items: [
        {
          id: 'clearCache',
          title: 'Clear Cache',
          subtitle: 'Free up storage space',
          type: 'button',
          onPress: () => {
            // Handle clear cache
            console.log('Clear cache pressed');
          },
        },
        {
          id: 'downloadLocation',
          title: 'Download Location',
          subtitle: 'Choose where to save downloads',
          type: 'button',
          onPress: () => {
            // Handle download location change
            console.log('Download location pressed');
          },
        },
      ],
    },
    {
      title: 'About',
      items: [
        {
          id: 'version',
          title: 'App Version',
          subtitle: '1.0.0',
          type: 'info',
        },
        {
          id: 'buildNumber',
          title: 'Build Number',
          subtitle: '2024.01.001',
          type: 'info',
        },
      ],
    },
  ];

  const renderSettingsItem = (item: SettingsItem) => {
    switch (item.type) {
      case 'toggle':
        return (
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>{item.title}</Text>
              {item.subtitle && (
                <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
              )}
            </View>
            <Switch
              value={item.value}
              onValueChange={item.onToggle}
              trackColor={{ false: '#333', true: '#D23535' }}
              thumbColor={item.value ? '#fff' : '#666'}
            />
          </View>
        );
      
      case 'button':
        return (
          <TouchableOpacity
            style={styles.settingItem}
            onPress={item.onPress}
            activeOpacity={0.7}
          >
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>{item.title}</Text>
              {item.subtitle && (
                <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
              )}
            </View>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
        );
      
      case 'info':
        return (
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>{item.title}</Text>
              {item.subtitle && (
                <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
              )}
            </View>
          </View>
        );
      
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
        <Text style={styles.headerSubtitle}>Customize your app experience</Text>
      </View>
      
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {settingsSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.sectionContent}>
              {section.items.map((item, itemIndex) => (
                <View key={item.id}>
                  {renderSettingsItem(item)}
                  {itemIndex < section.items.length - 1 && (
                    <View style={styles.separator} />
                  )}
                </View>
              ))}
            </View>
          </View>
        ))}
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
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: '#D23535',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  sectionContent: {
    backgroundColor: '#2a2a2a',
    marginHorizontal: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',
  },
  settingInfo: {
    flex: 1,
    marginRight: 15,
  },
  settingTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    marginBottom: 4,
  },
  settingSubtitle: {
    fontSize: 12,
    fontFamily: 'Montserrat',
    color: '#999',
    lineHeight: 16,
  },
  chevron: {
    fontSize: 18,
    color: '#666',
    fontFamily: 'Montserrat-Bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#333',
    marginHorizontal: 20,
  },
});

export default SettingsScreen;
