import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MoreScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileCard}>
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileRole}>Software Engineer</Text>
            <Text style={styles.employeeId}>EMP001</Text>
          </View>
        </View>
      </View>

      <View style={styles.menuCard}>
        <Text style={styles.cardTitle}>☰ Menu</Text>
        
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>👤</Text>
          <View style={styles.menuContent}>
            <Text style={styles.menuTitle}>Profile</Text>
            <Text style={styles.menuDescription}>View and edit your profile</Text>
          </View>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>⚙️</Text>
          <View style={styles.menuContent}>
            <Text style={styles.menuTitle}>Settings</Text>
            <Text style={styles.menuDescription}>App preferences and configurations</Text>
          </View>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>🏢</Text>
          <View style={styles.menuContent}>
            <Text style={styles.menuTitle}>Organization Tree</Text>
            <Text style={styles.menuDescription}>View company hierarchy</Text>
          </View>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>❓</Text>
          <View style={styles.menuContent}>
            <Text style={styles.menuTitle}>Help & Support</Text>
            <Text style={styles.menuDescription}>Get help and contact support</Text>
          </View>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>ℹ️</Text>
          <View style={styles.menuContent}>
            <Text style={styles.menuTitle}>About</Text>
            <Text style={styles.menuDescription}>App version and information</Text>
          </View>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.quickAccessCard}>
        <Text style={styles.cardTitle}>Quick Access</Text>
        
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>👥</Text>
          <View style={styles.menuContent}>
            <Text style={styles.menuTitle}>Employee Directory</Text>
            <Text style={styles.menuDescription}>Browse all employees</Text>
          </View>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuIcon}>📊</Text>
          <View style={styles.menuContent}>
            <Text style={styles.menuTitle}>Reports</Text>
            <Text style={styles.menuDescription}>View various HR reports</Text>
          </View>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
  <Text style={styles.menuIcon}>📄</Text>
  <View style={styles.menuContent}>
    <Text style={styles.menuTitle}>Policies</Text>
    <Text style={styles.menuDescription}>Company policies and procedures</Text>
  </View>
  <MaterialIcons name="chevron-right" size={20} color="#ccc" />
</TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileCard: {
    margin: 16,
    marginBottom: 8,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  menuCard: {
    margin: 16,
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  quickAccessCard: {
    margin: 16,
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1976d2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  profileRole: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  employeeId: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  menuIcon: {
    fontSize: 20,
    width: 30,
    textAlign: 'center',
  },
  menuContent: {
    flex: 1,
    marginLeft: 12,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  menuDescription: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  menuArrow: {
    fontSize: 20,
    color: '#ccc',
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginLeft: 42,
  },
});

export default MoreScreen;