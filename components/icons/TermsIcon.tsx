import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface TermsIconProps {
  size?: number;
  color?: string;
}

export const TermsIcon: React.FC<TermsIconProps> = ({ 
  size = 23, 
  color = '#ffffff' 
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 23 23" fill="none">
      <Path 
        d="M7.0166 8.56396H9.74764" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M7.0166 12.6606H15.8925" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M7.0166 16.7571H15.8925" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M2.92004 18.8053V4.46736C2.92004 2.95847 4.14218 1.73633 5.65108 1.73633H13.2789C13.6407 1.73633 13.9889 1.87971 14.2443 2.13642L19.5889 7.48106C19.8456 7.73778 19.989 8.08462 19.989 8.44648V18.8053C19.989 20.3142 18.7669 21.5363 17.258 21.5363H5.65108C4.14218 21.5363 2.92004 20.3142 2.92004 18.8053Z" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M19.866 7.88103H15.2096C14.4559 7.88103 13.8441 7.26928 13.8441 6.51552V1.87549" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
};
