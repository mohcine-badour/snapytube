import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { DownloadIcon } from './icons/DownloadIcon';

interface DownloadHistoryItem {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  downloadDate: string;
  fileSize: string;
  quality: string;
  status: 'completed' | 'failed' | 'downloading';
}

const DownloadHistoryScreen: React.FC = () => {
  // Mock data - in a real app, this would come from storage/database
  const downloadHistory: DownloadHistoryItem[] = [
    {
      id: '1',
      title: 'Sample Video 1 - How to Build React Native Apps',
      url: 'https://youtube.com/watch?v=sample1',
      thumbnail: 'https://via.placeholder.com/120x90/666666/FFFFFF?text=Video+1',
      downloadDate: '2024-01-15',
      fileSize: '45.2 MB',
      quality: '1080p',
      status: 'completed'
    },
    {
      id: '2',
      title: 'Sample Video 2 - Advanced JavaScript Tutorial',
      url: 'https://youtube.com/watch?v=sample2',
      thumbnail: 'https://via.placeholder.com/120x90/666666/FFFFFF?text=Video+2',
      downloadDate: '2024-01-14',
      fileSize: '28.7 MB',
      quality: '720p',
      status: 'completed'
    },
    {
      id: '3',
      title: 'Sample Video 3 - UI/UX Design Principles',
      url: 'https://youtube.com/watch?v=sample3',
      thumbnail: 'https://via.placeholder.com/120x90/666666/FFFFFF?text=Video+3',
      downloadDate: '2024-01-13',
      fileSize: '18.3 MB',
      quality: '480p',
      status: 'failed'
    },
    {
      id: '4',
      title: 'Sample Video 4 - Mobile App Development',
      url: 'https://youtube.com/watch?v=sample4',
      thumbnail: 'https://via.placeholder.com/120x90/666666/FFFFFF?text=Video+4',
      downloadDate: '2024-01-12',
      fileSize: '32.1 MB',
      quality: '720p',
      status: 'completed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#4CAF50';
      case 'failed':
        return '#F44336';
      case 'downloading':
        return '#FF9800';
      default:
        return '#9E9E9E';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return '✓ Completed';
      case 'failed':
        return '✗ Failed';
      case 'downloading':
        return '⏳ Downloading...';
      default:
        return 'Unknown';
    }
  };

  const renderDownloadItem = ({ item }: { item: DownloadHistoryItem }) => (
    <View style={styles.downloadItem}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.itemUrl} numberOfLines={1}>
          {item.url}
        </Text>
        <View style={styles.itemMeta}>
          <Text style={styles.metaText}>{item.downloadDate}</Text>
          <Text style={styles.metaText}>•</Text>
          <Text style={styles.metaText}>{item.fileSize}</Text>
          <Text style={styles.metaText}>•</Text>
          <Text style={styles.metaText}>{item.quality}</Text>
        </View>
        <Text style={[styles.statusText, { color: getStatusColor(item.status) }]}>
          {getStatusText(item.status)}
        </Text>
      </View>
      <TouchableOpacity style={styles.actionButton}>
        <DownloadIcon size={16} color="#D23535" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Download History</Text>
        <Text style={styles.headerSubtitle}>
          {downloadHistory.length} downloaded videos
        </Text>
      </View>
      
      <FlatList
        data={downloadHistory}
        renderItem={renderDownloadItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
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
  listContainer: {
    padding: 20,
  },
  downloadItem: {
    flexDirection: 'row',
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 4,
    marginBottom: 15,
    alignItems: 'center',
  },
  thumbnail: {
    width: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    marginBottom: 5,
    lineHeight: 20,
  },
  itemUrl: {
    fontSize: 12,
    fontFamily: 'Montserrat',
    color: '#999',
    marginBottom: 8,
  },
  itemMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  metaText: {
    fontSize: 10,
    fontFamily: 'Montserrat',
    color: '#666',
    marginRight: 8,
  },
  statusText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
});

export default DownloadHistoryScreen;
