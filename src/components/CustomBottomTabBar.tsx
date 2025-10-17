import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, Modal } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomText from './CustomText';

const { width } = Dimensions.get('window');

interface TabItem {
  name: string;
  icon: string;
  label: string;
}

interface CustomBottomTabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

const CustomBottomTabBar: React.FC<CustomBottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const [quickActionsOpen, setQuickActionsOpen] = React.useState(false);

  const tabs: TabItem[] = [
    { name: 'Services', icon: 'widgets', label: 'SERVICES' },
    { name: 'Home', icon: 'home', label: 'HOME' },
    { name: 'Approvals', icon: 'check-circle', label: 'APPROVALS' },
    { name: 'More', icon: 'menu', label: 'MORE' },
  ];

  const quickActions = [
    { id: 'status', label: 'Status', icon: 'access-time' },           // current status
    { id: 'comp-off', label: 'Comp Off', icon: 'event' },             // comp off request
    { id: 'regularisation', label: 'Regularisation', icon: 'edit' }, // correct attendance
    { id: 'time-log', label: 'Time Log', icon: 'schedule' },         // manual time log
    { id: 'leave', label: 'Leave', icon: 'event-note' },             // apply leave
  ];  

  const onTabPress = (routeName: string) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: routeName,
      canPreventDefault: true,
    });

    if (!event.defaultPrevented) {
      navigation.navigate(routeName);
    }
  };

  const onQuickActionsPress = () => {
    setQuickActionsOpen(!quickActionsOpen);
  };

  const onQuickActionPress = (action: string) => {
    setQuickActionsOpen(false);
    console.log(`Quick action: ${action}`);
  };

  return (
    <View style={styles.container}>
      {/* Main Tab Bar */}
      <View style={styles.tabBar}>
        {/* Left Side Tabs */}
        <View style={styles.leftTabs}>
          {tabs.slice(0, 2).map((tab, index) => {
            const isFocused = state.index === index;
            return (
              <TouchableOpacity
                key={tab.name}
                style={styles.tabItem}
                onPress={() => onTabPress(tab.name)}
                activeOpacity={0.7}
              >
                <MaterialIcons
                  name={tab.icon}
                  size={24}
                  color={isFocused ? '#FFD700' : '#FFFFFF'}
                />
                <CustomText
                  weight="medium"
                  style={[
                    styles.tabLabel,
                    { color: isFocused ? '#FFD700' : '#FFFFFF' }
                  ]}
                >
                  {tab.label}
                </CustomText>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Central Quick Actions Button */}
        <TouchableOpacity
          style={styles.quickActionsButton}
          onPress={onQuickActionsPress}
          activeOpacity={0.8}
        >
          <MaterialIcons 
            name={quickActionsOpen ? 'close' : 'add'} 
            size={28} 
            color="#FFFFFF" 
          />
        </TouchableOpacity>

        {/* Right Side Tabs */}
        <View style={styles.rightTabs}>
          {tabs.slice(2, 4).map((tab, index) => {
            const actualIndex = index + 2;
            const isFocused = state.index === actualIndex;
            return (
              <TouchableOpacity
                key={tab.name}
                style={styles.tabItem}
                onPress={() => onTabPress(tab.name)}
                activeOpacity={0.7}
              >
                <MaterialIcons
                  name={tab.icon}
                  size={24}
                  color={isFocused ? '#FFD700' : '#FFFFFF'}
                />
                <CustomText
                  weight="medium"
                  style={[
                    styles.tabLabel,
                    { color: isFocused ? '#FFD700' : '#FFFFFF' }
                  ]}
                >
                  {tab.label}
                </CustomText>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Quick Actions Modal */}
      <Modal
        visible={quickActionsOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setQuickActionsOpen(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={() => setQuickActionsOpen(false)}
        >
          <View style={styles.quickActionsContainer}>
            {quickActions.map((action, index) => (
              <TouchableOpacity
                key={action.id}
                style={[styles.quickAction, { bottom: 30 + (index * 60) }]}
                onPress={() => onQuickActionPress(action.id)}
              >
                <MaterialIcons name={action.icon} size={20} color="#1976d2" />
                <CustomText weight="medium" style={styles.quickActionLabel}>
                  {action.label}
                </CustomText>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#000000',
    height: 80,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // Create curved top edge
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  leftTabs: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
  },
  rightTabs: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    minWidth: 60,
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 4,
    textAlign: 'center',
  },
  quickActionsButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FF1493', // Bright pink/fuchsia
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
    shadowColor: '#FF1493',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  quickActionsContainer: {
    position: 'absolute',
    right: 70,
    bottom: 80,
  },
  quickAction: {
    position: 'absolute',
    right: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 25,
    marginBottom: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    gap: 8,
  },
  quickActionLabel: {
    fontSize: 14,
    color: '#333',
  },
});

export default CustomBottomTabBar;
