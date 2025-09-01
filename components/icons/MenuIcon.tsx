import React from 'react';
import { View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const MenuIcon = ({ 
  width = 23, 
  height = 17, 
  color = '#ffffff',
  strokeWidth = 2.34483,
  // style,
  ...props 
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 23 17"
      fill="none"
      style={[{ width, height }]}
      {...props}
    >
      {/* Three horizontal lines - hamburger menu */}
      <Path 
        d="M1.53784 15.7194H12.8712M1.53784 8.63607H21.3712M10.0378 1.55273H21.3712" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
};

export { MenuIcon };