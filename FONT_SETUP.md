# Font and Icon Setup Guide

## Poppins Fonts Configuration

### Fonts Available:
- Poppins-Regular.ttf
- Poppins-Italic.ttf  
- Poppins-Medium.ttf
- Poppins-SemiBold.ttf
- Poppins-Bold.ttf

### Usage in Code:
```typescript
import CustomText from '../components/CustomText';

// Different font weights
<CustomText weight="regular">Regular text</CustomText>
<CustomText weight="medium">Medium text</CustomText>
<CustomText weight="semiBold">SemiBold text</CustomText>
<CustomText weight="bold">Bold text</CustomText>
<CustomText weight="italic">Italic text</CustomText>
```

## Material Icons Configuration

### Icons Available:
- MaterialIcons
- MaterialCommunityIcons

### Usage in Code:
```typescript
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

<MaterialIcons name="home" size={24} color="#1976d2" />
<MaterialCommunityIcons name="account" size={24} color="#1976d2" />
```

## Troubleshooting

### If Icons Don't Show:
1. **Clean and Rebuild:**
   ```bash
   # Android
   cd android && ./gradlew clean && cd ..
   npx react-native run-android
   
   # iOS
   cd ios && xcodebuild clean && cd ..
   npx react-native run-ios
   ```

2. **Check Font Files:**
   - Android: `android/app/src/main/assets/fonts/`
   - iOS: `ios/HRMS/`

3. **Verify Configuration:**
   - Android: `android/app/build.gradle` has vector icons config
   - iOS: `ios/HRMS/Info.plist` has UIAppFonts array

### If Fonts Don't Show:
1. **Check Font Names:**
   - Use exact font names: 'Poppins-Regular', 'Poppins-Bold', etc.
   - Don't use 'Poppins' as family name

2. **Rebuild App:**
   - Fonts require app rebuild, not just Metro restart

## Testing

The app includes an IconTest component to verify both fonts and icons are working correctly.

## Next Steps

1. Remove IconTest component after verification
2. Apply Poppins fonts to all screens
3. Update all Text components to use CustomText
