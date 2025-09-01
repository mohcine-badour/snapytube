import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface AboutIconProps {
  size?: number;
  color?: string;
}

export const AboutIcon: React.FC<AboutIconProps> = ({ 
  size = 23, 
  color = '#ffffff' 
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 23 23" fill="none">
      <Path 
        d="M11.4546 20.4971C16.3485 20.4971 20.3157 16.5299 20.3157 11.636C20.3157 6.74216 16.3485 2.7749 11.4546 2.7749C6.56076 2.7749 2.59351 6.74216 2.59351 11.636C2.59351 16.5299 6.56076 20.4971 11.4546 20.4971Z" 
        stroke={color} 
        strokeWidth="1.65" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M11.4546 16.3038V10.7195" 
        stroke={color} 
        strokeWidth="1.65" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M11.4546 8.8861C10.78 8.8861 10.2324 8.33732 10.2324 7.66387C10.2324 6.99043 10.78 6.44165 11.4546 6.44165C12.1293 6.44165 12.6769 6.99043 12.6769 7.66387C12.6769 8.33732 12.1293 8.8861 11.4546 8.8861Z" 
        fill={color}
      />
    </Svg>
  );
};
