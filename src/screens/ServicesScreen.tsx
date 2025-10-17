import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StatusBar,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomText from '../components/CustomText';
import { useNavigation } from '@react-navigation/native';

const ServicesScreen: React.FC = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const groupedServices = [
    {
      title: 'Employee Self Service',
      data: [
        { id: 'profile', icon: 'account-circle', label: 'MY PROFILE' },
        { id: 'leave', icon: 'event', label: 'LEAVE' },
        { id: 'attendance', icon: 'bar-chart', label: 'ATTENDANCE' },
        { id: 'timesheet', icon: 'access-time', label: 'TIMESHEET' },
        { id: 'payslip', icon: 'attach-money', label: 'PAYSLIP' },
        { id: 'reimbursement', icon: 'receipt', label: 'REIMBURSEMENT' },
        { id: 'shift', icon: 'schedule', label: 'SHIFT SCHEDULE' },
      ],
    },
    {
      title: 'Approvals & Requests',
      data: [
        { id: 'approvals', icon: 'check-circle-outline', label: 'APPROVALS' },
        { id: 'requests', icon: 'help-outline', label: 'REQUESTS' },
        { id: 'travel', icon: 'flight-takeoff', label: 'TRAVEL' },
      ],
    },
    {
      title: 'Company & HR',
      data: [
        { id: 'organization', icon: 'business', label: 'ORGANIZATION' },
        { id: 'policies', icon: 'gavel', label: 'POLICIES' },
        { id: 'announcements', icon: 'campaign', label: 'ANNOUNCEMENTS' },
        { id: 'holidays', icon: 'event-available', label: 'HOLIDAYS' },
        { id: 'training', icon: 'school', label: 'TRAINING' },
        { id: 'files', icon: 'folder', label: 'FILES' },
      ],
    },
    {
      title: 'Communication & Support',
      data: [
        { id: 'chat', icon: 'chat', label: 'CHAT' },
        { id: 'helpdesk', icon: 'support-agent', label: 'HELP DESK' },
        { id: 'feedback', icon: 'rate-review', label: 'FEEDBACK' },
      ],
    },
  ];

  // Filter by search
  const filteredGroups = groupedServices.map(group => ({
    ...group,
    data: group.data.filter(service =>
      service.label.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(group => group.data.length > 0);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <View style={styles.profilePicture}>
              <MaterialIcons name="person" size={24} color="#1976d2" />
            </View>
            <CustomText weight="bold" style={styles.headerTitle}>
              Services
            </CustomText>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.actionIcon}>
              <MaterialIcons name="search" size={24} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationIcon}>
              <MaterialIcons name="notifications" size={24} color="#666" />
              <View style={styles.notificationBadge}>
                <CustomText weight="bold" style={styles.badgeText}>10</CustomText>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Services"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.menuIcon}>
            <MaterialIcons name="menu" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Services */}
        {filteredGroups.length > 0 ? (
          filteredGroups.map(group => (
            <View key={group.title} style={styles.section}>
              <CustomText weight="semiBold" style={styles.sectionTitle}>
                {group.title}
              </CustomText>
              <View style={styles.servicesGrid}>
                {group.data.map(service => (
                  <TouchableOpacity
                    key={service.id}
                    style={styles.serviceCard}
                    onPress={() => navigation.navigate(service.id as never)}
                  >
                    <View style={styles.iconContainer}>
                      <MaterialIcons name={service.icon} size={32} color="#1976d2" />
                    </View>
                    <CustomText weight="semiBold" style={styles.serviceLabel}>
                      {service.label}
                    </CustomText>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))
        ) : (
          <View style={styles.noResults}>
            <CustomText>No services found.</CustomText>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  scrollView: { flex: 1 },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 20, paddingTop: 50, paddingBottom: 16, backgroundColor: '#fff',
  },
  profileContainer: { flexDirection: 'row', alignItems: 'center' },
  profilePicture: {
    width: 40, height: 40, borderRadius: 20, backgroundColor: '#e3f2fd',
    justifyContent: 'center', alignItems: 'center', marginRight: 12,
  },
  headerTitle: { fontSize: 24, color: '#333' },
  headerActions: { flexDirection: 'row', alignItems: 'center' },
  actionIcon: { padding: 8, marginRight: 8 },
  notificationIcon: { padding: 8, position: 'relative' },
  notificationBadge: {
    position: 'absolute', top: 4, right: 4, backgroundColor: '#f44336',
    borderRadius: 10, width: 20, height: 20, justifyContent: 'center', alignItems: 'center',
  },
  badgeText: { color: '#fff', fontSize: 12 },
  searchContainer: {
    flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20,
    paddingVertical: 16, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#e0e0e0',
  },
  searchInput: {
    flex: 1, height: 40, backgroundColor: '#f5f5f5', borderRadius: 20,
    paddingHorizontal: 16, fontSize: 16, color: '#333',
  },
  menuIcon: { padding: 8, marginLeft: 12 },
  section: { paddingHorizontal: 20, paddingVertical: 10 },
  sectionTitle: {
    fontSize: 16, color: '#555', marginBottom: 10, textTransform: 'uppercase',
  },
  servicesGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  serviceCard: {
    width: '48%', aspectRatio: 1, backgroundColor: '#fff', borderRadius: 12,
    justifyContent: 'center', alignItems: 'center', marginBottom: 16, elevation: 2,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22, shadowRadius: 2.22, paddingVertical: 20,
  },
  iconContainer: { marginBottom: 8 },
  serviceLabel: { fontSize: 13, color: '#333', textAlign: 'center' },
  noResults: { alignItems: 'center', padding: 20 },
});

export default ServicesScreen;
