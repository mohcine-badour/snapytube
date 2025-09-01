import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';

interface DownloadModalProps {
  isVisible: boolean;
  onClose: () => void;
  videoUrl?: string;
  videoThumbnail?: string;
  videoTitle?: string;
}

interface DownloadOption {
  id: string;
  type: 'video' | 'audio';
  quality: string;
  size?: string;
  format: string;
}

const DownloadModal: React.FC<DownloadModalProps> = ({
  isVisible,
  onClose,
  videoUrl,
  videoThumbnail,
  videoTitle = 'Video Title'
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '75%'], []);

  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isDownloading, setIsDownloading] = useState(false);

  // Mock download options - in real app, these would come from API
  const downloadOptions: DownloadOption[] = [
    { id: '1', type: 'video', quality: '1080p', size: '45.2 MB', format: 'MP4' },
    { id: '2', type: 'video', quality: '720p', size: '28.7 MB', format: 'MP4' },
    { id: '3', type: 'video', quality: '480p', size: '18.3 MB', format: 'MP4' },
    { id: '4', type: 'audio', quality: '320kbps', size: '8.5 MB', format: 'MP3' },
    { id: '5', type: 'audio', quality: '192kbps', size: '5.2 MB', format: 'MP3' },
  ];

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.5}
      />
    ),
    []
  );

  const handleDownload = async () => {
    if (selectedOption) {
      setIsDownloading(true);
      
      // Simulate download process
      setTimeout(() => {
        // Handle download logic here
        console.log('Downloading:', selectedOption);
        // In a real app, you would start the download process here
        // For now, we'll just show a success message
        alert('Download started! This is a demo - in a real app, the download would begin now.');
        setIsDownloading(false);
        onClose();
      }, 2000); // 2 second delay to simulate download
    }
  };

  const getTypeIcon = (type: 'video' | 'audio') => {
    return type === 'video' ? '🎥' : '🎵';
  };

  const getQualityColor = (quality: string) => {
    if (quality.includes('1080p') || quality.includes('320kbps')) return '#4CAF50';
    if (quality.includes('720p') || quality.includes('192kbps')) return '#FF9800';
    return '#9E9E9E';
  };

  React.useEffect(() => {
    if (isVisible) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isVisible]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={isVisible ? 0 : -1}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      onClose={onClose}
      backgroundStyle={styles.bottomSheetBackground}
      handleIndicatorStyle={styles.handleIndicator}
    >
      <BottomSheetView style={styles.contentContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Download Options</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>

        {/* Video Info */}
        <View style={styles.videoInfoContainer}>
          {videoThumbnail ? (
            <Image source={{ uri: videoThumbnail }} style={styles.thumbnail} />
          ) : (
            <View style={styles.placeholderThumbnail}>
              <Text style={styles.placeholderText}>🎥</Text>
            </View>
          )}
          <View style={styles.videoDetails}>
            <Text style={styles.videoTitle} numberOfLines={2}>
              {videoTitle}
            </Text>
            <Text style={styles.videoUrl} numberOfLines={1}>
              {videoUrl || 'No URL provided'}
            </Text>
          </View>
        </View>

        {/* Download Options */}
        <View style={styles.optionsContainer}>
          <Text style={styles.optionsTitle}>Choose Download Format:</Text>
          
          {downloadOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionItem,
                selectedOption === option.id && styles.selectedOption
              ]}
              onPress={() => setSelectedOption(option.id)}
            >
              <View style={styles.optionLeft}>
                <Text style={styles.optionIcon}>{getTypeIcon(option.type)}</Text>
                <View style={styles.optionInfo}>
                  <Text style={styles.optionType}>
                    {option.type.charAt(0).toUpperCase() + option.type.slice(1)} - {option.quality}
                  </Text>
                  <Text style={styles.optionFormat}>{option.format}</Text>
                </View>
              </View>
              <View style={styles.optionRight}>
                <Text style={[styles.optionQuality, { color: getQualityColor(option.quality) }]}>
                  {option.quality}
                </Text>
                {option.size && (
                  <Text style={styles.optionSize}>{option.size}</Text>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Download Button */}
        <TouchableOpacity
          style={[
            styles.downloadButton,
            !selectedOption && styles.downloadButtonDisabled,
            isDownloading && styles.downloadButtonLoading
          ]}
          onPress={handleDownload}
          disabled={!selectedOption || isDownloading}
        >
          {isDownloading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.downloadButtonText}>
              {selectedOption ? 'Download Now' : 'Select Format'}
            </Text>
          )}
        </TouchableOpacity>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  bottomSheetBackground: {
    backgroundColor: '#1a1a1a',
  },
  handleIndicator: {
    backgroundColor: '#666',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
  },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat',
  },
  videoInfoContainer: {
    flexDirection: 'row',
    marginBottom: 25,
    padding: 15,
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
  },
  thumbnail: {
    width: 80,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  placeholderThumbnail: {
    width: 80,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  placeholderText: {
    fontSize: 24,
  },
  videoDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  videoTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    marginBottom: 5,
  },
  videoUrl: {
    fontSize: 12,
    fontFamily: 'Montserrat',
    color: '#999',
  },
  optionsContainer: {
    flex: 1,
  },
  optionsTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    marginBottom: 15,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedOption: {
    borderColor: '#D23535',
    backgroundColor: '#3a2a2a',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  optionInfo: {
    flex: 1,
  },
  optionType: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    marginBottom: 2,
  },
  optionFormat: {
    fontSize: 12,
    fontFamily: 'Montserrat',
    color: '#999',
  },
  optionRight: {
    alignItems: 'flex-end',
  },
  optionQuality: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 2,
  },
  optionSize: {
    fontSize: 12,
    fontFamily: 'Montserrat',
    color: '#999',
  },
  downloadButton: {
    backgroundColor: '#D23535',
    borderRadius: 27,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  downloadButtonDisabled: {
    backgroundColor: '#666',
  },
  downloadButtonLoading: {
    backgroundColor: '#D23535',
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
});

export default DownloadModal;
