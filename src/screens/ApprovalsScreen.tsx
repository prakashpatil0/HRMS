import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';

const ApprovalsScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View style={styles.card}>
        <Text style={styles.title}>✅ Approvals</Text>
        <Text style={styles.paragraph}>
          View and manage pending requests such as leaves, timesheets, and more.
        </Text>
      </View>

      {/* Pending Approvals */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🕓 Pending Approvals</Text>

        <View style={styles.approvalItem}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
          <View style={styles.approvalContent}>
            <Text style={styles.approvalName}>John Doe</Text>
            <Text style={styles.approvalType}>Leave Request</Text>
            <Text style={styles.approvalDate}>Dec 15–17, 2024</Text>
          </View>
          <View style={styles.approvalActions}>
            <TouchableOpacity style={styles.approveButton}>
              <Text style={styles.approveButtonText}>Approve</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rejectButton}>
              <Text style={styles.rejectButtonText}>Reject</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.approvalItem}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JS</Text>
          </View>
          <View style={styles.approvalContent}>
            <Text style={styles.approvalName}>Jane Smith</Text>
            <Text style={styles.approvalType}>Timesheet</Text>
            <Text style={styles.approvalDate}>Week of Dec 9, 2024</Text>
          </View>
          <View style={styles.approvalActions}>
            <TouchableOpacity style={styles.approveButton}>
              <Text style={styles.approveButtonText}>Approve</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rejectButton}>
              <Text style={styles.rejectButtonText}>Reject</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Recently Approved */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>✅ Recently Approved</Text>

        <View style={styles.approvalItem}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>MJ</Text>
          </View>
          <View style={styles.approvalContent}>
            <Text style={styles.approvalName}>Mike Johnson</Text>
            <Text style={styles.approvalType}>Leave Request</Text>
            <View style={styles.statusChipApproved}>
              <Text style={styles.statusChipText}>Approved</Text>
            </View>
          </View>
        </View>

        <View style={styles.approvalItem}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>AB</Text>
          </View>
          <View style={styles.approvalContent}>
            <Text style={styles.approvalName}>Alice Brown</Text>
            <Text style={styles.approvalType}>Timesheet</Text>
            <View style={styles.statusChipApproved}>
              <Text style={styles.statusChipText}>Approved</Text>
            </View>
          </View>
        </View>
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
    fontWeight: 'bold',
    color: '#1976d2',
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  approvalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#1976d2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  approvalContent: {
    flex: 1,
    marginLeft: 12,
  },
  approvalName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  approvalType: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  approvalDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  approvalActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  approveButton: {
    backgroundColor: '#4caf50',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  approveButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  rejectButton: {
    borderWidth: 1,
    borderColor: '#f44336',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  rejectButtonText: {
    color: '#f44336',
    fontSize: 12,
    fontWeight: '500',
  },
  statusChipApproved: {
    backgroundColor: '#E8F5E9',
    borderWidth: 1,
    borderColor: '#4CAF50',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginTop: 6,
  },
  statusChipText: {
    color: '#388E3C',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default ApprovalsScreen;
