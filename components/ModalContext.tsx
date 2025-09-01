import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  isDownloadModalVisible: boolean;
  videoUrl: string;
  videoThumbnail: string;
  videoTitle: string;
  showDownloadModal: (url: string, thumbnail?: string, title?: string) => void;
  hideDownloadModal: () => void;
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

  const showDownloadModal = (url: string, thumbnail: string = '', title: string = '') => {
    setVideoUrl(url);
    setVideoThumbnail(thumbnail);
    setVideoTitle(title);
    setIsDownloadModalVisible(true);
  };

  const hideDownloadModal = () => {
    setIsDownloadModalVisible(false);
  };

  const value: ModalContextType = {
    isDownloadModalVisible,
    videoUrl,
    videoThumbnail,
    videoTitle,
    showDownloadModal,
    hideDownloadModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};
