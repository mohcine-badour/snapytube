import React from 'react';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

interface PrivacyIconProps {
  size?: number;
  color?: string;
}

export const PrivacyIcon: React.FC<PrivacyIconProps> = ({ 
  size = 21, 
  color = '#ffffff' 
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 21 21" fill="none">
      <G clipPath="url(#clip0_58_3403)">
        <Path 
          d="M12.1213 7.30288L10.3113 9.11288C9.68616 9.73778 8.83847 10.0888 7.95459 10.0888C7.07071 10.0888 6.22302 9.73778 5.59792 9.11288L5.45459 8.96954L9.56209 4.86204C10.6673 3.75716 12.166 3.13647 13.7288 3.13647C15.2915 3.13647 16.7903 3.75716 17.8954 4.86204C18.8235 5.79021 19.4153 7.00157 19.5769 8.30414C19.7386 9.60671 19.4609 10.926 18.7879 12.0529" 
          stroke={color} 
          strokeWidth="1.66667" 
          strokeMiterlimit="10" 
          strokeLinecap="square"
        />
        <Path 
          d="M13.1763 10.0246L16.1871 13.0354C16.6558 13.5042 16.9191 14.14 16.9191 14.8029C16.9191 15.4658 16.6558 16.1016 16.1871 16.5704L14.8238 17.9337C14.3595 18.3981 13.8082 18.7665 13.2016 19.0178C12.5949 19.2691 11.9446 19.3985 11.2879 19.3985C10.6313 19.3985 9.98101 19.2691 9.37433 19.0178C8.76765 18.7665 8.21641 18.3981 7.75211 17.9337L3.01378 13.1954C1.9089 12.0902 1.28821 10.5915 1.28821 9.02873C1.28821 7.46599 1.9089 5.96723 3.01378 4.86206C4.10314 3.76965 5.57858 3.14972 7.12128 3.13623" 
          stroke={color} 
          strokeWidth="1.66667" 
          strokeMiterlimit="10" 
          strokeLinecap="square"
        />
        <Path 
          d="M15.7805 16.977L12.538 13.7354" 
          stroke={color} 
          strokeWidth="1.66667" 
          strokeMiterlimit="10"
        />
        <Path 
          d="M13.3822 18.9403L10.3572 15.9153" 
          stroke={color} 
          strokeWidth="1.66667" 
          strokeMiterlimit="10"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_58_3403">
          <Rect width="20" height="20" fill="white" transform="translate(0.45459 0.63623)"/>
        </ClipPath>
      </Defs>
    </Svg>
  );
};
