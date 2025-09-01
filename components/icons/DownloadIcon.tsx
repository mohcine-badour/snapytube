import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface DownloadIconProps {
  size?: number;
  color?: string;
}

export const DownloadIcon: React.FC<DownloadIconProps> = ({ 
  size = 21, 
  color = '#ffffff' 
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 21 21" fill="none">
      <Path 
        d="M1.40698 14.7075V18.3266C1.40698 18.8065 1.59763 19.2667 1.93698 19.6061C2.27633 19.9454 2.73659 20.1361 3.21651 20.1361H17.6927C18.1726 20.1361 18.6329 19.9454 18.9722 19.6061C19.3116 19.2667 19.5022 18.8065 19.5022 18.3266V14.7075" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeMiterlimit="10" 
        strokeLinecap="round"
      />
      <Path 
        d="M10.4546 1.13623V14.7077" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeMiterlimit="10" 
        strokeLinecap="round"
      />
      <Path 
        d="M5.93079 10.1838L10.4546 14.7076L14.9784 10.1838" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeMiterlimit="10" 
        strokeLinecap="round"
      />
    </Svg>
  );
};
