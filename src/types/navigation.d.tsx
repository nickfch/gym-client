import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import {
  MainStack,
  MainBottomTab,
  WorkoutStack,
  ExerciseStack,
} from 'src/constants/navigation';

export type WorkoutStackParamList = {
  [WorkoutStack.WorkoutScreen]: {
    workoutId: string;
    name: string;
  };
  [WorkoutStack.WorkoutDetailsScreen]: {
    workoutId: string;
    name: string;
  };
  [WorkoutStack.PlanWorkoutScreen]: undefined;
};

export type ExerciseStackParamList = {
  [ExerciseStack.ExerciseDetailsScreen]: {
    exerciseId: string;
  };
};

export type MainBottomTabParamList = {
  [MainBottomTab.HomeScreen]: undefined;
  [MainBottomTab.ProfileScreen]: undefined;
  [MainBottomTab.WorkoutScreen]: NavigatorScreenParams<WorkoutStackParamList>;
};

export type RootStackParamList = {
  [MainStack.WorkoutStack]: NavigatorScreenParams<WorkoutStackParamList>;
  [MainStack.ExerciseStack]: NavigatorScreenParams<ExerciseStackParamList>;
  [MainStack.MainBottomTab]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type WorkoutStackScreenProps<T extends keyof WorkoutStackParamList> =
  CompositeScreenProps<
    StackScreenProps<WorkoutStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type ExerciseStackScreenProps<T extends keyof ExerciseStackParamList> =
  CompositeScreenProps<
    StackScreenProps<ExerciseStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
