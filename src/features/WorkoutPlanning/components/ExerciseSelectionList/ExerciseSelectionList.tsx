import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import { Exercise } from 'src/types';
import { styles } from './ExerciseSelectionList.styles';

interface ExerciseSelectionListProps {
  exercises: Exercise[];
  onSelectExercise: (exercise: Exercise) => void;
  isLoading?: boolean;
  selectedCategory?: string;
  categories?: string[];
  onCategoryChange: (category: string) => void;
}

export const ExerciseSelectionList: React.FC<ExerciseSelectionListProps> = ({
  exercises = [],
  onSelectExercise,
  isLoading = false,
  selectedCategory = 'All',
  categories = ['All', 'Strength', 'Cardio', 'Flexibility', 'Balance'],
  onCategoryChange,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter exercises based on search and category
  const filteredExercises = exercises.filter((exercise) => {
    const matchesSearch = exercise.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || exercise.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Render individual exercise item
  const renderExerciseItem = ({ item }: { item: Exercise }) => (
    <TouchableOpacity
      style={styles.exerciseItem}
      onPress={() => onSelectExercise(item)}
    >
      <View style={styles.exerciseInfo}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={styles.exerciseDetails}>
          {item.muscleGroup} • {item.difficulty}
        </Text>
      </View>
      <Text style={styles.exerciseCategory}>{item.category}</Text>
    </TouchableOpacity>
  );

  // Render category filter pills
  const renderCategoryFilters = () => (
    <View style={styles.categoryContainer}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryPill,
              selectedCategory === item && styles.selectedCategoryPill,
            ]}
            onPress={() => onCategoryChange(item)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === item && styles.selectedCategoryText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Exercise</Text>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search exercises..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Category filters */}
      {renderCategoryFilters()}

      {/* Exercise list */}
      {isLoading ? (
        <ActivityIndicator size="large" color="#0066cc" style={styles.loader} />
      ) : (
        <FlatList
          data={filteredExercises}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderExerciseItem}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              {searchQuery
                ? 'No exercises match your search'
                : 'No exercises available in this category'}
            </Text>
          }
        />
      )}
    </View>
  );
};
