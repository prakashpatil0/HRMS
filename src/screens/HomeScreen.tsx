import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CustomText from '../components/CustomText';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Welcome Section */}
      <View style={styles.card}>
        <CustomText weight="bold" style={styles.title}>👋 Welcome back, John!</CustomText>
        <CustomText weight="regular" style={styles.paragraph}>
          Here’s your HR summary for today.
        </CustomText>
      </View>

      {/* Quick Actions */}
      <View style={styles.card}>
        <CustomText weight="bold" style={styles.cardTitle}>⚡ Quick Actions</CustomText>
        <View style={styles.chipContainer}>
          <TouchableOpacity style={styles.chip}>
            <CustomText weight="medium" style={styles.chipText}>Punch In</CustomText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chip}>
            <CustomText weight="medium" style={styles.chipText}>Punch Out</CustomText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chip}>
            <CustomText weight="medium" style={styles.chipText}>Apply Leave</CustomText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chip}>
            <CustomText weight="medium" style={styles.chipText}>View Payslip</CustomText>
          </TouchableOpacity>
        </View>
      </View>

      {/* Attendance Overview */}
      <View style={styles.card}>
        <CustomText weight="bold" style={styles.cardTitle}>🕒 Attendance</CustomText>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <CustomText weight="bold" style={styles.statNumber}>8.5</CustomText>
            <CustomText weight="regular" style={styles.statLabel}>Hours Today</CustomText>
          </View>
          <View style={styles.statItem}>
            <CustomText weight="bold" style={styles.statNumber}>22</CustomText>
            <CustomText weight="regular" style={styles.statLabel}>Days Worked</CustomText>
          </View>
          <View style={styles.statItem}>
            <CustomText weight="bold" style={styles.statNumber}>95%</CustomText>
            <CustomText weight="regular" style={styles.statLabel}>Attendance</CustomText>
          </View>
        </View>
      </View>

      {/* Birthdays */}
      <View style={styles.card}>
        <CustomText weight="bold" style={styles.cardTitle}>🎂 Today’s Birthdays</CustomText>
        <CustomText weight="regular" style={styles.listItem}>• Jane Smith</CustomText>
        <CustomText weight="regular" style={styles.listItem}>• Mike Johnson</CustomText>
        <TouchableOpacity style={styles.button}>
          <CustomText weight="medium" style={styles.buttonText}>View All</CustomText>
        </TouchableOpacity>
      </View>

      {/* Announcements */}
      <View style={styles.card}>
        <CustomText weight="bold" style={styles.cardTitle}>📢 Announcements</CustomText>
        <CustomText weight="regular" style={styles.paragraph}>
          🔸 Company meeting scheduled for tomorrow at 2 PM.
        </CustomText>
        <CustomText weight="regular" style={styles.paragraph}>
          🔸 Office renovation work will start next week.
        </CustomText>
        <TouchableOpacity style={styles.button}>
          <CustomText weight="medium" style={styles.buttonText}>View All</CustomText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  title: {
    fontSize: 20,
    color: '#1976d2',
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  listItem: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  chip: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#1976d2',
  },
  chipText: {
    fontSize: 12,
    color: '#1976d2',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 22,
    color: '#1976d2',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  button: {
    borderWidth: 1,
    borderColor: '#1976d2',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#1976d2',
    fontSize: 13,
  },
});

export default HomeScreen;
