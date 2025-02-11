import { StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

import ParallaxScrollView from '@/src/components/ParallaxScrollView';
import { ThemedText } from '@/src/components/ThemedText';
import { ThemedView } from '@/src/components/ThemedView';
import { useAuth } from '@/src/contexts/AuthContext';
import { logout } from '@/src/firebase/authService';

export default function HomeScreen() {
  const { user } = useAuth();
  
  const { data: stats } = useQuery({
    queryKey: ['stats'],
    queryFn: async () => {
      // TODO: Implement stats fetching
      return {
        totalCards: 0,
        dueTodayCount: 0,
        completedToday: 0
      };
    }
  });

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerContent={
        <ThemedText type="title" style={styles.headerTitle}>
          Flashcards
        </ThemedText>
      }>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.welcomeSection}>
          <ThemedText type="title">Welcome back, {user?.email}!</ThemedText>
          <TouchableOpacity 
            style={styles.logoutButton} 
            onPress={async () => {
              try {
                await logout();
              } catch (error) {
                console.error('Logout error:', error);
              }
            }}>
            <ThemedText style={styles.logoutText}>Logout</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={styles.statsContainer}>
          <ThemedText type="subtitle">Today's Overview</ThemedText>
          <ThemedView style={styles.statsGrid}>
            <ThemedView style={styles.statBox}>
              <ThemedText type="defaultSemiBold">{stats?.dueTodayCount}</ThemedText>
              <ThemedText>Cards Due</ThemedText>
            </ThemedView>
            <ThemedView style={styles.statBox}>
              <ThemedText type="defaultSemiBold">{stats?.completedToday}</ThemedText>
              <ThemedText>Completed</ThemedText>
            </ThemedView>
            <ThemedView style={styles.statBox}>
              <ThemedText type="defaultSemiBold">{stats?.totalCards}</ThemedText>
              <ThemedText>Total Cards</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        <TouchableOpacity 
          style={styles.studyButton}
          onPress={() => router.push('/study')}>
          <ThemedText style={styles.studyButtonText}>Start Studying</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.createButton}
          onPress={() => router.push('/create')}>
          <ThemedText style={styles.createButtonText}>Create New Cards</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 20,
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 24,
    padding: 16,
  },
  welcomeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statsContainer: {
    gap: 12,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  studyButton: {
    backgroundColor: '#0a7ea4',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  studyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createButton: {
    backgroundColor: '#34a853',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  createButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    padding: 8,
  },
  logoutText: {
    color: '#dc3545',
  },
});