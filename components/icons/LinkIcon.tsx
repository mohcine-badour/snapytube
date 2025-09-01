import React from 'react';
import { Svg, Path } from 'react-native-svg';

const LinkIcon = ({ 
  size = 17, 
  color = '#222222',
  style,
  ...props 
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      style={[{ width: size, height: size }, style]}
      {...props}
    >
      <Path 
        d="M11.1212 13.9696V12.6363M12.4545 11.303H13.7879M5.15452 8.16496L4.21171 9.10777C3.17031 10.1492 3.17099 11.8374 4.21238 12.8788C5.25378 13.9202 6.94175 13.9205 7.98315 12.8791L8.92625 11.9361M4.45455 5.96965H3.12122M5.78788 3.30298V4.63631M7.9832 5.33661L8.926 4.3938C9.9674 3.3524 11.6556 3.3521 12.697 4.3935C13.7384 5.43489 13.7381 7.12351 12.6967 8.16491L11.754 9.10769" 
        stroke={color} 
        strokeWidth="1.33333" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M6.56921 10.522L10.3404 6.75073" 
        stroke={color} 
        strokeWidth="1.33333" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export { LinkIcon };