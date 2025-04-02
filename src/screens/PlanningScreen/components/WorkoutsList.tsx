import React, { memo } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  Workout,
  Exercise,
  WorkoutTypeEnum,
  WorkoutEquipmentEnum,
} from 'src/types';
import { useBinaryState } from 'src/hooks/useBinaryState';
import { useStyles } from './WorkoutsList.styles';

interface WorkoutListProps {
  workouts: Workout[];
  onSelectWorkout: (workoutId: string) => void;
}

type WorkoutCardProps = {
  workoutId: string;
  name: string;
  type: WorkoutTypeEnum;
  duration: string;
  equipments: WorkoutEquipmentEnum[];
  exercises: Exercise[];
  onSelectWorkout: (workoutId: string) => void;
};

const WorkoutCard = memo<WorkoutCardProps>(
  ({
    workoutId,
    name,
    type,
    duration,
    equipments,
    exercises,
    onSelectWorkout,
  }) => {
    const { value: isExpanded, toggle: toggleExpand } = useBinaryState();
    const styles = useStyles();
    // Get color based on workout type
    const getWorkoutTypeColor = (type: string) => {
      switch (type) {
        case 'strength':
          return '#0066cc'; // Blue
        case 'cardio':
          return '#cc3300'; // Red
        case 'hiit':
          return '#ff9900'; // Orange
        case 'flexibility':
          return '#33cc99'; // Teal
        case 'recovery':
          return '#6633cc'; // Purple
        default:
          return '#666666'; // Gray
      }
    };

    return (
      <TouchableOpacity
        style={[styles.card, isExpanded && styles.expandedCard]}
        onPress={toggleExpand}
        activeOpacity={0.8}
      >
        {/* Closed View */}
        <View style={styles.cardHeader}>
          <View style={styles.titleContainer}>
            <Text style={styles.workoutName}>{name}</Text>
            <View
              style={[
                styles.typeBadge,
                { backgroundColor: getWorkoutTypeColor(type) },
              ]}
            >
              <Text style={styles.typeText}>{type}</Text>
            </View>
          </View>

          <View style={styles.detailsRow}>
            <View style={styles.detailItem}>
              <Ionicons name="time-outline" size={16} color="#666" />
              <Text style={styles.detailText}>{duration}</Text>
            </View>

            <View style={styles.detailItem}>
              <Ionicons name="barbell-outline" size={16} color="#666" />
              <Text style={styles.detailText}>
                {equipments.length > 0
                  ? equipments.length > 1
                    ? `${equipments[0]} +${equipments.length - 1}`
                    : equipments[0]
                  : 'No equipment'}
              </Text>
            </View>

            <Ionicons
              name={isExpanded ? 'chevron-up' : 'chevron-down'}
              size={20}
              color="#666"
            />
          </View>
        </View>
        {isExpanded && (
          <View style={styles.exercisesContainer}>
            <Text style={styles.exercisesSectionTitle}>Exercises</Text>
            {exercises.map((exercise, index) => (
              <View key={exercise.id} style={styles.exerciseItem}>
                <View style={styles.exerciseHeader}>
                  <Text style={styles.exerciseNumber}>{index + 1}</Text>
                  <Text style={styles.exerciseName}>{exercise.name}</Text>
                </View>
                <View style={styles.exerciseDetails}>
                  <Text style={styles.exerciseText}>
                    {exercise.sets} {exercise.sets === 1 ? 'set' : 'sets'} ×{' '}
                    {exercise.equipment}
                  </Text>
                </View>
              </View>
            ))}
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => onSelectWorkout(workoutId)}
            >
              <Text style={styles.startButtonText}>Start Workout</Text>
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    );
  },
);

export const WorkoutsList: React.FC<WorkoutListProps> = ({
  workouts,
  onSelectWorkout,
}) => {
  const styles = useStyles();

  const renderWorkoutCard = ({ item }: { item: Workout }) => {
    return (
      <WorkoutCard
        workoutId={item.documentId!}
        name={item.name}
        type={item.type}
        duration={String(item.duration)}
        equipments={
          (item.exercises
            ?.map((ex) => ex.equipment)
            .flat() as WorkoutEquipmentEnum[]) ?? ([] as WorkoutEquipmentEnum[])
        }
        exercises={(item?.exercises as Exercise[]) ?? ([] as Exercise[])}
        onSelectWorkout={onSelectWorkout}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={workouts}
        renderItem={renderWorkoutCard}
        keyExtractor={(item) => item.documentId!}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
