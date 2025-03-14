import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { MainStack, WorkoutStack } from 'src/constants/navigation';

import { styles } from './Profile.styles';

export const ProfileScreen = ({
  user = {
    name: 'Alex Johnson',
    image: null, // Use null for default avatar
    memberSince: 'March 2023',
    level: 'Intermediate',
    goals: [
      { id: '1', text: 'Lose 10 pounds by June', completed: false },
      { id: '2', text: 'Run a 5K under 25 minutes', completed: false },
      { id: '3', text: 'Complete 4 workouts per week', completed: true },
    ],
  },
  workoutData = generateSampleWorkoutData(),
  onEditGoals,
}) => {
  const { navigate } = useNavigation();
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [newGoal, setNewGoal] = useState('');
  const [userGoals, setUserGoals] = useState(user.goals);

  // Calculate workout stats
  const totalWorkouts = workoutData.reduce((sum, day) => sum + day.count, 0);
  const mostActiveDay =
    [...workoutData].sort((a, b) => b.count - a.count)[0]?.day || '-';
  const averageWorkoutsPerWeek = (
    totalWorkouts /
    (workoutData.length / 7)
  ).toFixed(1);

  // Handle adding a new goal
  const handleAddGoal = () => {
    if (newGoal.trim() === '') return;

    const updatedGoals = [
      ...userGoals,
      { id: Date.now().toString(), text: newGoal, completed: false },
    ];

    setUserGoals(updatedGoals);
    setNewGoal('');
    setShowGoalModal(false);

    if (onEditGoals) {
      onEditGoals(updatedGoals);
    }
  };

  // Handle toggling goal completion
  const handleToggleGoal = (goalId) => {
    const updatedGoals = userGoals.map((goal) =>
      goal.id === goalId ? { ...goal, completed: !goal.completed } : goal,
    );

    setUserGoals(updatedGoals);

    if (onEditGoals) {
      onEditGoals(updatedGoals);
    }
  };

  // Handle removing a goal
  const handleRemoveGoal = (goalId) => {
    const updatedGoals = userGoals.filter((goal) => goal.id !== goalId);
    setUserGoals(updatedGoals);

    if (onEditGoals) {
      onEditGoals(updatedGoals);
    }
  };

  // Render workout activity calendar
  const renderWorkoutActivity = () => (
    <View style={styles.activityContainer}>
      <Text style={styles.sectionTitle}>Workout Activity</Text>
      <Text style={styles.sectionSubtitle}>Last 24 Days</Text>

      <View style={styles.calendarContainer}>
        {workoutData.map((day, index) => (
          <View key={index} style={styles.dayContainer}>
            <View
              style={[
                styles.dayBlock,
                { backgroundColor: getActivityColor(day.count) },
              ]}
            />
            {index % 6 === 0 && <Text style={styles.dayLabel}>{day.day}</Text>}
          </View>
        ))}
      </View>

      <View style={styles.activityLegend}>
        <Text style={styles.legendText}>Less</Text>
        {[0, 1, 2, 3].map((level) => (
          <View
            key={level}
            style={[
              styles.legendBlock,
              { backgroundColor: getActivityColor(level) },
            ]}
          />
        ))}
        <Text style={styles.legendText}>More</Text>
      </View>
    </View>
  );

  // Render stats section
  const renderStats = () => (
    <View style={styles.statsContainer}>
      <View style={styles.statCard}>
        <Text style={styles.statValue}>{totalWorkouts}</Text>
        <Text style={styles.statLabel}>Total Workouts</Text>
      </View>

      <View style={styles.statCard}>
        <Text style={styles.statValue}>{averageWorkoutsPerWeek}</Text>
        <Text style={styles.statLabel}>Avg Workouts/Week</Text>
      </View>

      <View style={styles.statCard}>
        <Text style={styles.statValue}>{mostActiveDay}</Text>
        <Text style={styles.statLabel}>Most Active Day</Text>
      </View>
    </View>
  );

  // Render goals section
  const renderGoals = () => (
    <View style={styles.goalsContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>My Goals</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setShowGoalModal(true)}
        >
          <Ionicons name="add-circle" size={24} color="#0066cc" />
        </TouchableOpacity>
      </View>

      {userGoals.length === 0 ? (
        <Text style={styles.noGoalsText}>
          You haven't set any goals yet. Tap + to add one!
        </Text>
      ) : (
        userGoals.map((goal) => (
          <View key={goal.id} style={styles.goalItem}>
            <TouchableOpacity
              style={styles.goalCheckbox}
              onPress={() => handleToggleGoal(goal.id)}
            >
              {goal.completed ? (
                <Ionicons name="checkmark-circle" size={24} color="#4CD964" />
              ) : (
                <Ionicons name="ellipse-outline" size={24} color="#999" />
              )}
            </TouchableOpacity>

            <Text
              style={[
                styles.goalText,
                goal.completed && styles.goalTextCompleted,
              ]}
            >
              {goal.text}
            </Text>

            <TouchableOpacity
              style={styles.removeGoalButton}
              onPress={() => handleRemoveGoal(goal.id)}
            >
              <Ionicons name="close-circle" size={20} color="#ff3b30" />
            </TouchableOpacity>
          </View>
        ))
      )}
    </View>
  );

  // Render add goal modal
  const renderAddGoalModal = () => (
    <Modal
      visible={showGoalModal}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setShowGoalModal(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add New Goal</Text>

          <TextInput
            style={styles.goalInput}
            placeholder="Enter your fitness goal..."
            value={newGoal}
            onChangeText={setNewGoal}
            multiline
          />

          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalButton, styles.cancelButton]}
              onPress={() => {
                setNewGoal('');
                setShowGoalModal(false);
              }}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modalButton, styles.addGoalButton]}
              onPress={handleAddGoal}
            >
              <Text style={styles.addGoalButtonText}>Add Goal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

  return (
    <ScrollView style={styles.container}>
      {/* User Info Section */}
      <View style={styles.profileHeaderContainer}>
        <View style={styles.profileImageContainer}>
          {user.image ? (
            <Image source={{ uri: user.image }} style={styles.profileImage} />
          ) : (
            <View style={styles.defaultAvatar}>
              <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
            </View>
          )}
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.userName}>{user.name}</Text>
          <View style={styles.userMetaInfo}>
            <View style={styles.metaItem}>
              <Ionicons name="calendar-outline" size={16} color="#666" />
              <Text style={styles.metaText}>
                Member since {user.memberSince}
              </Text>
            </View>
            <View style={styles.metaItem}>
              <Ionicons name="fitness-outline" size={16} color="#666" />
              <Text style={styles.metaText}>{user.level} Level</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigate(MainStack.WorkoutStack, {
                  screen: WorkoutStack.PlanWorkoutScreen,
                });
              }}
            >
              <View style={styles.metaItem}>
                <Ionicons name="fitness-outline" size={16} color="#3b2dda" />
                <Text style={styles.metaText}>Plan Workout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Stats Section */}
      {renderStats()}

      {/* Activity Calendar */}
      {renderWorkoutActivity()}

      {/* Goals Section */}
      {renderGoals()}

      {/* Add Goal Modal */}
      {renderAddGoalModal()}
    </ScrollView>
  );
};

// Helper function to generate sample workout data for the last 24 days
function generateSampleWorkoutData() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const data = [];

  for (let i = 0; i < 24; i++) {
    // Calculate the day of week for this entry
    const dayIndex = (new Date().getDay() - i) % 7;
    const day = days[dayIndex >= 0 ? dayIndex : dayIndex + 7];

    // Generate random workout count (0-3)
    const count = Math.floor(Math.random() * 4);

    data.unshift({ day, count });
  }

  return data;
}

// Helper function to get color based on workout count
function getActivityColor(count) {
  const colors = [
    '#ebedf0', // 0 workouts
    '#c6e48b', // 1 workout
    '#7bc96f', // 2 workouts
    '#239a3b', // 3 workouts
  ];

  return colors[Math.min(count, colors.length - 1)];
}
