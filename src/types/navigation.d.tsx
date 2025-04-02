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
  AuthStack,
} from 'src/constants/navigation';

export type WorkoutStackParamList = {
  [WorkoutStack.WorkoutScreen]: {
    workoutId: string;
    completedExerciseIds?: string[];
  };
  [WorkoutStack.WorkoutDetailsScreen]: {
    workoutId: string;
    name: string;
  };
  [WorkoutStack.PlanWorkoutScreen]: undefined;
  [WorkoutStack.PlanWeeklyWorkoutsScreen]: undefined;
};

export type AuthStackParamList = {
  [AuthStack.SignInScreen]:
    | undefined
    | {
        successRedirectScreen: keyof MainStack;
      };
  [AuthStack.SignUpScreen]:
    | undefined
    | {
        successRedirectScreen: keyof MainStack;
      };
};

export type ExerciseStackParamList = {
  [ExerciseStack.ExerciseCancelScreen]: undefined;
  [ExerciseStack.ExerciseFinishedScreen]: {
    workoutId: string;
    name: string;
  };
  [ExerciseStack.ExerciseDetailsScreen]: {
    exerciseId: string;
  };
  [ExerciseStack.ExerciseScreen]: undefined;
};

export type MainBottomTabParamList = {
  [MainBottomTab.HomeScreen]: undefined;
  [MainBottomTab.ProfileScreen]: undefined;
  [MainBottomTab.WorkoutScreen]: NavigatorScreenParams<WorkoutStackParamList>;
};

export type RootStackParamList = {
  [MainStack.AuthStack]: NavigatorScreenParams<AuthStackParamList>;
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
