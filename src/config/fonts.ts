export const Fonts = {
  // Poppins Font Family
  Poppins: {
    regular: 'Poppins-Regular',
    italic: 'Poppins-Italic',
    medium: 'Poppins-Medium',
    semiBold: 'Poppins-SemiBold',
    bold: 'Poppins-Bold',
  },
} as const;

export type FontWeight = 'regular' | 'italic' | 'medium' | 'semiBold' | 'bold';

export const getFontFamily = (weight: FontWeight = 'regular'): string => {
  return Fonts.Poppins[weight];
};
