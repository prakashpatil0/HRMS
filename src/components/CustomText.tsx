import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { getFontFamily, FontWeight } from '../config/fonts';

interface CustomTextProps extends TextProps {
  weight?: FontWeight;
  children: React.ReactNode;
}

const CustomText: React.FC<CustomTextProps> = ({ 
  weight = 'regular', 
  style, 
  children, 
  ...props 
}) => {
  const fontFamily = getFontFamily(weight);
  
  return (
    <Text 
      style={[styles.defaultText, { fontFamily }, style]} 
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    color: '#333',
  },
});

export default CustomText;
