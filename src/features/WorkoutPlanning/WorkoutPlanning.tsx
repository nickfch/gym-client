import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

// Import components
import { ExerciseSelectionList } from './components/ExerciseSelectionList';
// import WeeklyCalendar from './components/WeeklyCalendar';
// import PlanSummary from './components/PlanSummary';

import { styles } from './WorkoutPlanning.styles';

// Import types
import { Exercise, WorkoutPlan, DayPlan } from 'src/types';

// Mock exercise data
const mockExercises: Exercise[] = [
  // Chest
  {
    id: '1',
    name: 'Bench Press',
    category: 'Chest',
    equipment: 'Barbell',
    sets: 4,
    reps: 8,
    completed: false,
  },
  {
    id: '2',
    name: 'Incline Bench Press',
    category: 'Chest',
    equipment: 'Barbell',
    sets: 4,
    reps: 8,
    completed: false,
  },
  {
    id: '3',
    name: 'Chest Fly',
    category: 'Chest',
    equipment: 'Dumbbell',
    sets: 3,
    reps: 12,
    completed: false,
  },
  {
    id: '4',
    name: 'Push-up',
    category: 'Chest',
    equipment: 'Bodyweight',
    sets: 3,
    reps: 15,
    completed: false,
  },
  {
    id: '5',
    name: 'Cable Crossover',
    category: 'Chest',
    equipment: 'Cable',
    sets: 3,
    reps: 12,
    completed: false,
  },

  // Back
  {
    id: '6',
    name: 'Deadlift',
    category: 'Back',
    equipment: 'Barbell',
    sets: 4,
    reps: 6,
    completed: false,
  },
  {
    id: '7',
    name: 'Pull-up',
    category: 'Back',
    equipment: 'Bodyweight',
    sets: 3,
    reps: 10,
    completed: false,
  },
  {
    id: '8',
    name: 'Bent Over Row',
    category: 'Back',
    equipment: 'Barbell',
    sets: 4,
    reps: 8,
    completed: false,
  },
  {
    id: '9',
    name: 'Lat Pulldown',
    category: 'Back',
    equipment: 'Cable',
    sets: 3,
    reps: 12,
    completed: false,
  },
  {
    id: '10',
    name: 'Seated Row',
    category: 'Back',
    equipment: 'Cable',
    sets: 3,
    reps: 12,
    completed: false,
  },

  // Legs
  {
    id: '11',
    name: 'Squat',
    category: 'Legs',
    equipment: 'Barbell',
    sets: 4,
    reps: 10,
    completed: false,
  },
  {
    id: '12',
    name: 'Leg Press',
    category: 'Legs',
    equipment: 'Machine',
    sets: 4,
    reps: 12,
    completed: false,
  },
  {
    id: '13',
    name: 'Leg Extension',
    category: 'Legs',
    equipment: 'Machine',
    sets: 3,
    reps: 15,
    completed: false,
  },
  {
    id: '14',
    name: 'Leg Curl',
    category: 'Legs',
    equipment: 'Machine',
    sets: 3,
    reps: 15,
    completed: false,
  },
  {
    id: '15',
    name: 'Calf Raise',
    category: 'Legs',
    equipment: 'Machine',
    sets: 4,
    reps: 20,
    completed: false,
  },

  // Shoulders
  {
    id: '16',
    name: 'Overhead Press',
    category: 'Shoulders',
    equipment: 'Barbell',
    sets: 4,
    reps: 8,
    completed: false,
  },
  {
    id: '17',
    name: 'Lateral Raise',
    category: 'Shoulders',
    equipment: 'Dumbbell',
    sets: 3,
    reps: 12,
    completed: false,
  },
  {
    id: '18',
    name: 'Front Raise',
    category: 'Shoulders',
    equipment: 'Dumbbell',
    sets: 3,
    reps: 12,
    completed: false,
  },
  {
    id: '19',
    name: 'Face Pull',
    category: 'Shoulders',
    equipment: 'Cable',
    sets: 3,
    reps: 15,
    completed: false,
  },
  {
    id: '20',
    name: 'Shrug',
    category: 'Shoulders',
    equipment: 'Dumbbell',
    sets: 4,
    reps: 12,
    completed: false,
  },

  // Arms
  {
    id: '21',
    name: 'Bicep Curl',
    category: 'Arms',
    equipment: 'Dumbbell',
    sets: 4,
    reps: 10,
    completed: false,
  },
  {
    id: '22',
    name: 'Tricep Extension',
    category: 'Arms',
    equipment: 'Cable',
    sets: 3,
    reps: 12,
    completed: false,
  },
  {
    id: '23',
    name: 'Hammer Curl',
    category: 'Arms',
    equipment: 'Dumbbell',
    sets: 4,
    reps: 10,
    completed: false,
  },
  {
    id: '24',
    name: 'Skull Crusher',
    category: 'Arms',
    equipment: 'Barbell',
    sets: 3,
    reps: 12,
    completed: false,
  },
  {
    id: '25',
    name: 'Preacher Curl',
    category: 'Arms',
    equipment: 'Barbell',
    sets: 3,
    reps: 12,
    completed: false,
  },

  // Core
  {
    id: '26',
    name: 'Plank',
    category: 'Core',
    equipment: 'Bodyweight',
    sets: 3,
    reps: 60,
    completed: false,
  },
  {
    id: '27',
    name: 'Crunch',
    category: 'Core',
    equipment: 'Bodyweight',
    sets: 3,
    reps: 20,
    completed: false,
  },
  {
    id: '28',
    name: 'Russian Twist',
    category: 'Core',
    equipment: 'Bodyweight',
    sets: 3,
    reps: 20,
    completed: false,
  },
  {
    id: '29',
    name: 'Leg Raise',
    category: 'Core',
    equipment: 'Bodyweight',
    sets: 3,
    reps: 15,
    completed: false,
  },
  {
    id: '30',
    name: 'Ab Wheel Rollout',
    category: 'Core',
    equipment: 'Ab Wheel',
    sets: 3,
    reps: 12,
    completed: false,
  },
];

// Days of the week
const DAYS_OF_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const WorkoutPlanningScreen = () => {
  const [loading, setLoading] = useState(true);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [selectedExercises, setSelectedExercises] = useState<{
    [key: string]: boolean;
  }>({});
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [planName, setPlanName] = useState('My Workout Plan');

  // Weekly plan - initialize with empty arrays for each day
  const [weeklyPlan, setWeeklyPlan] = useState<WorkoutPlan>({
    name: 'My Workout Plan',
    days: DAYS_OF_WEEK.reduce((acc, day) => {
      acc[day] = { exercises: [] };
      return acc;
    }, {} as { [key: string]: DayPlan }),
  });

  // Load exercises
  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setExercises(mockExercises);
      setFilteredExercises(mockExercises);
      setLoading(false);
    }, 800);
  }, []);

  // Filter exercises based on search and category
  useEffect(() => {
    let filtered = exercises;

    // Apply category filter
    if (categoryFilter !== 'All') {
      filtered = filtered.filter(
        (exercise) => exercise.category === categoryFilter,
      );
    }

    // Apply search filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(query) ||
          exercise.category.toLowerCase().includes(query) ||
          exercise.equipment.toLowerCase().includes(query),
      );
    }

    setFilteredExercises(filtered);
  }, [searchQuery, categoryFilter, exercises]);

  // Handle exercise selection
  const toggleExerciseSelection = (exerciseId: string) => {
    setSelectedExercises((prev) => ({
      ...prev,
      [exerciseId]: !prev[exerciseId],
    }));
  };

  // Get all unique categories
  const categories = [
    'All',
    ...Array.from(new Set(exercises.map((ex) => ex.category))),
  ];

  // Add selected exercises to a day
  const addExercisesToDay = (day: string) => {
    const selectedExerciseIds = Object.keys(selectedExercises).filter(
      (id) => selectedExercises[id],
    );
    const exercisesToAdd = exercises.filter((ex) =>
      selectedExerciseIds.includes(ex.id),
    );

    setWeeklyPlan((prev) => {
      const updatedDay = {
        ...prev.days[day],
        exercises: [...prev.days[day].exercises, ...exercisesToAdd],
      };

      return {
        ...prev,
        days: {
          ...prev.days,
          [day]: updatedDay,
        },
      };
    });
  };

  // Remove exercise from a day
  const removeExerciseFromDay = (day: string, exerciseId: string) => {
    setWeeklyPlan((prev) => {
      const updatedExercises = prev.days[day].exercises.filter(
        (ex) => ex.id !== exerciseId,
      );

      return {
        ...prev,
        days: {
          ...prev.days,
          [day]: {
            ...prev.days[day],
            exercises: updatedExercises,
          },
        },
      };
    });
  };

  // Clear all selected exercises
  const clearSelectedExercises = () => {
    setSelectedExercises({});
  };

  // Save the workout plan
  const saveWorkoutPlan = () => {
    // Update the plan name
    setWeeklyPlan((prev) => ({
      ...prev,
      name: planName,
    }));

    // Here you would typically make an API call to save the plan
    console.log('Saving workout plan:', {
      ...weeklyPlan,
      name: planName,
    });

    // Show success message or navigate away
    alert('Workout plan saved successfully!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView style={styles.scrollContainer}>
        {/* Plan Name Input */}
        <View style={styles.planNameContainer}>
          <Text style={styles.sectionTitle}>Plan Name</Text>
          <TextInput
            style={styles.planNameInput}
            value={planName}
            onChangeText={setPlanName}
            placeholder="Enter plan name"
          />
        </View>

        {/* Exercise Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Exercises</Text>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <Ionicons
              name="search"
              size={20}
              color="#6B7280"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search exercises..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <Ionicons name="close-circle" size={20} color="#6B7280" />
              </TouchableOpacity>
            )}
          </View>

          {/* Category Filters */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesContainer}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryPill,
                  categoryFilter === category && styles.categoryPillActive,
                ]}
                onPress={() => setCategoryFilter(category)}
              >
                <Text
                  style={[
                    styles.categoryPillText,
                    categoryFilter === category &&
                      styles.categoryPillTextActive,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Exercise List with Checkboxes */}
          <ExerciseSelectionList
            exercises={filteredExercises}
            selectedExercises={selectedExercises}
            onToggleSelection={toggleExerciseSelection}
          />

          {/* Selection Actions */}
          <View style={styles.selectionActions}>
            <Text style={styles.selectedCount}>
              {Object.values(selectedExercises).filter(Boolean).length}{' '}
              exercises selected
            </Text>
            <TouchableOpacity
              style={styles.clearButton}
              onPress={clearSelectedExercises}
            >
              <Text style={styles.clearButtonText}>Clear Selection</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Weekly Calendar */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Weekly Schedule</Text>
          <Text style={styles.sectionDescription}>
            Add your selected exercises to specific days by tapping on a day
          </Text>

          {/* <WeeklyCalendar
            weeklyPlan={weeklyPlan}
            onDayPress={addExercisesToDay}
            onRemoveExercise={removeExerciseFromDay}
          /> */}
        </View>

        {/* Plan Summary */}
        {/* <PlanSummary weeklyPlan={weeklyPlan} /> */}

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={saveWorkoutPlan}>
          <Text style={styles.saveButtonText}>Save Workout Plan</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
