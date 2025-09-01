import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';

interface AlertModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  type?: 'error' | 'warning' | 'info' | 'success';
}

const AlertModal: React.FC<AlertModalProps> = ({
  isVisible,
  onClose,
  title,
  message,
  confirmText = 'OK',
  cancelText,
  onConfirm,
  type = 'info'
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['40%'], []);

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

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  };

  const getTypeIcon = () => {
    switch (type) {
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      case 'success':
        return '✅';
      case 'info':
      default:
        return 'ℹ️';
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'error':
        return '#FF6B6B';
      case 'warning':
        return '#FFA726';
      case 'success':
        return '#4CAF50';
      case 'info':
      default:
        return '#D23535';
    }
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
        {/* Icon */}
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>{getTypeIcon()}</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>{title}</Text>

        {/* Message */}
        <Text style={styles.message}>{message}</Text>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          {cancelText && (
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={styles.cancelButtonText}>{cancelText}</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={[
              styles.button, 
              styles.confirmButton, 
              { backgroundColor: getTypeColor() }
            ]}
            onPress={handleConfirm}
          >
            <Text style={styles.confirmButtonText}>{confirmText}</Text>
          </TouchableOpacity>
        </View>
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
    paddingHorizontal: 30,
    paddingTop: 20,
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 20,
  },
  icon: {
    fontSize: 48,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 15,
  },
  message: {
    fontSize: 16,
    fontFamily: 'Montserrat',
    color: '#E2E6EA',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    width: '100%',
  },
  button: {
    flex: 1,
    borderRadius: 27,
    paddingVertical: 15,
    alignItems: 'center',
    minWidth: 120,
  },
  confirmButton: {
    backgroundColor: '#D23535',
  },
  cancelButton: {
    backgroundColor: '#333',
    borderWidth: 1,
    borderColor: '#666',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat',
  },
});

export default AlertModal;
