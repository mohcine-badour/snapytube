import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { FacebookIcon, InstagramIcon, YouTubeIcon, TikTokIcon, SeparatorIcon, ArrowIcon } from './icons/SocialIcons';
import { LinkIcon } from './icons/LinkIcon';
import { useModal } from './ModalContext';

interface VideoInfo {
  title: string;
  thumbnail: string;
  formats: { id: string; type: 'video' | 'audio'; quality: string; size: string; format: string }[];
  platform: 'youtube' | 'tiktok' | 'instagram' | 'facebook' | 'unknown';
}

const HomeScreen: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { showDownloadModal, showWarningAlert } = useModal();

  const detectPlatform = (url: string): 'youtube' | 'tiktok' | 'instagram' | 'facebook' | 'unknown' => {
    const lowerUrl = url.toLowerCase();
    if (lowerUrl.includes('youtube.com') || lowerUrl.includes('youtu.be')) return 'youtube';
    if (lowerUrl.includes('tiktok.com')) return 'tiktok';
    if (lowerUrl.includes('instagram.com')) return 'instagram';
    if (lowerUrl.includes('facebook.com') || lowerUrl.includes('fb.com')) return 'facebook';
    return 'unknown';
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'youtube':
        return 'https://www.youtube.com/favicon.ico';
      case 'tiktok':
        return 'https://www.tiktok.com/favicon.ico';
      case 'instagram':
        return 'https://www.instagram.com/favicon.ico';
      case 'facebook':
        return 'https://www.facebook.com/favicon.ico';
      default:
        return 'https://via.placeholder.com/80x60/666666/FFFFFF?text=Video';
    }
  };

  const extractVideoInfo = async (url: string): Promise<VideoInfo> => {
    const platform = detectPlatform(url);
    
    // In a real app, you would make an API call to get video metadata
    // For now, we'll simulate this with realistic data based on the platform
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Generate realistic mock data based on platform
    const mockFormats = [
      { id: '1', type: 'video' as const, quality: '1080p', size: `${Math.floor(Math.random() * 50) + 20} MB`, format: 'MP4' },
      { id: '2', type: 'video' as const, quality: '720p', size: `${Math.floor(Math.random() * 30) + 15} MB`, format: 'MP4' },
      { id: '3', type: 'video' as const, quality: '480p', size: `${Math.floor(Math.random() * 20) + 10} MB`, format: 'MP4' },
      { id: '4', type: 'audio' as const, quality: '320kbps', size: `${Math.floor(Math.random() * 10) + 5} MB`, format: 'MP3' },
      { id: '5', type: 'audio' as const, quality: '192kbps', size: `${Math.floor(Math.random() * 8) + 3} MB`, format: 'MP3' },
    ];

    // Extract video ID from URL for more realistic thumbnail
    let thumbnail = getPlatformIcon(platform);
    let title = 'Video Title';
    
    try {
      if (platform === 'youtube') {
        const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
        if (videoId) {
          thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
          title = `YouTube Video - ${videoId}`;
        } else {
          // Fallback to default YouTube thumbnail
          thumbnail = 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg';
          title = 'YouTube Video';
        }
      } else if (platform === 'tiktok') {
        const videoId = url.match(/video\/(\d+)/)?.[1] || url.match(/\/(\d+)/)?.[1];
        if (videoId) {
          title = `TikTok Video - ${videoId}`;
        } else {
          title = 'TikTok Video';
        }
      } else if (platform === 'instagram') {
        const postId = url.match(/p\/([^\/]+)/)?.[1] || url.match(/reel\/([^\/]+)/)?.[1];
        if (postId) {
          title = `Instagram ${url.includes('/reel/') ? 'Reel' : 'Post'} - ${postId}`;
        } else {
          title = 'Instagram Post';
        }
      } else if (platform === 'facebook') {
        const postId = url.match(/videos\/(\d+)/)?.[1] || url.match(/(\d+)/)?.[1];
        if (postId) {
          title = `Facebook Video - ${postId}`;
        } else {
          title = 'Facebook Video';
        }
      } else {
        // For unknown platforms, try to extract some meaningful info
        const urlParts = url.split('/');
        const lastPart = urlParts[urlParts.length - 1];
        if (lastPart && lastPart.length > 0) {
          title = `Video - ${lastPart.substring(0, 20)}${lastPart.length > 20 ? '...' : ''}`;
        }
      }
    } catch (error) {
      console.warn('Error parsing video URL:', error);
      // Keep default values if parsing fails
    }

    return {
      title,
      thumbnail,
      formats: mockFormats,
      platform
    };
  };

  const handleDownloadPress = async () => {
    if (videoUrl.trim()) {
      setIsLoading(true);
      
      try {
        const videoInfo = await extractVideoInfo(videoUrl);
        showDownloadModal(videoUrl, videoInfo.thumbnail, videoInfo.title, videoInfo.formats, videoInfo.platform);
      } catch (error) {
        console.error('Error extracting video info:', error);
        showWarningAlert(
          'Error',
          'Unable to extract video information. Please check the URL and try again.'
        );
      } finally {
        setIsLoading(false);
      }
    } else {
      showWarningAlert(
        'URL Required',
        'Please enter a video URL in the input field above to continue with the download.'
      );
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/bg_image.png')} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.content}>
            <View style={styles.imageContainer}>
              <Image 
                source={require('../assets/bg_transparent.png')} 
                style={styles.transparentBackground}
                resizeMode="cover"
              />
              <Image 
                source={require('../assets/bg_download.png')} 
                style={styles.downloadImage}
                resizeMode="contain"
              />
              <TouchableOpacity 
                style={[styles.downloadButton, isLoading && styles.downloadButtonLoading]} 
                activeOpacity={0.8}
                onPress={handleDownloadPress}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text style={styles.downloadButtonText}>Download</Text>
                )}
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
                  value={videoUrl}
                  onChangeText={setVideoUrl}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
             </ImageBackground>
     </View>
   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingTop: 100, // Add padding to account for absolute positioned header
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
  downloadButtonLoading: {
    backgroundColor: '#D23535', // A lighter color for loading state
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 16,
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
    fontFamily: 'Montserrat',
    zIndex: 3,
    bottom: 420,
    alignSelf: 'center',
    width: '85%',
    lineHeight: 22,
  },
});

export default HomeScreen;
