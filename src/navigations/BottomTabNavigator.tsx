import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomBottomTabBar from '../components/CustomBottomTabBar';

// Import screens
import ServicesScreen from '../screens/ServicesScreen';
import HomeScreen from '../screens/HomeScreen';
import ApprovalsScreen from '../screens/ApprovalsScreen';
import MoreScreen from '../screens/MoreScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomBottomTabBar {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1976d2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen 
        name="Services" 
        component={ServicesScreen}
        options={{
          title: 'Services',
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title: 'Home',
          headerTitle: '🏠 Home',
        }}
      />
      <Tab.Screen 
        name="Approvals" 
        component={ApprovalsScreen}
        options={{
          title: 'Approvals',
          headerTitle: '✅ Approvals',
        }}
      />
      <Tab.Screen 
        name="More" 
        component={MoreScreen}
        options={{
          title: 'More',
          headerTitle: '☰ More',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

