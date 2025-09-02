import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DownloadFormat {
  id: string;
  type: 'video' | 'audio';
  quality: string;
  size: string;
  format: string;
}

interface AlertModalData {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  type?: 'error' | 'warning' | 'info' | 'success';
}

interface ModalContextType {
  isDownloadModalVisible: boolean;
  videoUrl: string;
  videoThumbnail: string;
  videoTitle: string;
  videoFormats: DownloadFormat[];
  videoPlatform: 'youtube' | 'tiktok' | 'instagram' | 'facebook' | 'unknown';
  showDownloadModal: (url: string, thumbnail?: string, title?: string, formats?: DownloadFormat[], platform?: 'youtube' | 'tiktok' | 'instagram' | 'facebook' | 'unknown') => void;
  hideDownloadModal: () => void;
  // Alert modal
  isAlertModalVisible: boolean;
  alertModalData: AlertModalData;
  showAlertModal: (data: AlertModalData) => void;
  hideAlertModal: () => void;
  // Helper functions
  showErrorAlert: (title: string, message: string) => void;
  showSuccessAlert: (title: string, message: string) => void;
  showInfoAlert: (title: string, message: string) => void;
  showWarningAlert: (title: string, message: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isDownloadModalVisible, setIsDownloadModalVisible] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoThumbnail, setVideoThumbnail] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [videoFormats, setVideoFormats] = useState<DownloadFormat[]>([]);
  const [videoPlatform, setVideoPlatform] = useState<'youtube' | 'tiktok' | 'instagram' | 'facebook' | 'unknown'>('unknown');

  // Alert modal state
  const [isAlertModalVisible, setIsAlertModalVisible] = useState(false);
  const [alertModalData, setAlertModalData] = useState<AlertModalData>({
    title: '',
    message: '',
    confirmText: 'OK',
    type: 'info'
  });

  const showDownloadModal = (
    url: string, 
    thumbnail: string = '', 
    title: string = '', 
    formats: DownloadFormat[] = [],
    platform: 'youtube' | 'tiktok' | 'instagram' | 'facebook' | 'unknown' = 'unknown'
  ) => {
    setVideoUrl(url);
    setVideoThumbnail(thumbnail);
    setVideoTitle(title);
    setVideoFormats(formats);
    setVideoPlatform(platform);
    setIsDownloadModalVisible(true);
  };

  const hideDownloadModal = () => {
    setIsDownloadModalVisible(false);
  };

  const showAlertModal = (data: AlertModalData) => {
    setAlertModalData(data);
    setIsAlertModalVisible(true);
  };

  // Helper functions for common alert types
  const showErrorAlert = (title: string, message: string) => {
    showAlertModal({
      title,
      message,
      confirmText: 'OK',
      type: 'error'
    });
  };

  const showSuccessAlert = (title: string, message: string) => {
    showAlertModal({
      title,
      message,
      confirmText: 'OK',
      type: 'success'
    });
  };

  const showInfoAlert = (title: string, message: string) => {
    showAlertModal({
      title,
      message,
      confirmText: 'OK',
      type: 'info'
    });
  };

  const showWarningAlert = (title: string, message: string) => {
    showAlertModal({
      title,
      message,
      confirmText: 'OK',
      type: 'warning'
    });
  };

  const hideAlertModal = () => {
    setIsAlertModalVisible(false);
  };

  const value: ModalContextType = {
    isDownloadModalVisible,
    videoUrl,
    videoThumbnail,
    videoTitle,
    videoFormats,
    videoPlatform,
    showDownloadModal,
    hideDownloadModal,
    isAlertModalVisible,
    alertModalData,
    showAlertModal,
    hideAlertModal,
    showErrorAlert,
    showSuccessAlert,
    showInfoAlert,
    showWarningAlert,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};
