# HRMS React Native App Setup

## Prerequisites
- Node.js (>=20)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

## Installation

1. Install dependencies:
```bash
npm install
```

2. For iOS (macOS only):
```bash
cd ios && pod install && cd ..
```

3. For Android, make sure you have:
   - Android SDK
   - Android emulator or physical device connected

## Running the App

### Android
```bash
npm run android
```

### iOS (macOS only)
```bash
npm run ios
```

### Metro Bundler
```bash
npm start
```

## Features Implemented

### Bottom Tab Navigation
- **Services** 🧩 - Access all HR modules (Attendance, Leave, Time Logs, etc.)
- **Home** 🏠 - Dashboard with widgets, birthdays, announcements, check-in/out shortcut
- **Approvals** ✅ - View & manage approvals (leave, timesheet, etc.)
- **More** ☰ - Access secondary menus (Profile, Settings, Organization Tree, etc.)

### Floating Action Button (FAB)
- **Punch In** - Quick clock in
- **Punch Out** - Quick clock out
- **Apply Leave** - Quick leave application
- **Add Task** - Quick task creation

## Tech Stack
- React Native 0.82.0
- TypeScript
- Pure React Native Components (No external UI library)
- React Navigation 6
- Emoji Icons (No external icon dependencies)

## Project Structure
```
src/
├── screens/          # Screen components
├── navigations/      # Navigation setup
├── components/       # Reusable components
├── api/             # API services
└── assets/          # Images, fonts, etc.
```

## Next Steps
1. Implement API integration
2. Add authentication
3. Implement real data fetching
4. Add more HR modules
5. Implement push notifications
6. Add offline support

