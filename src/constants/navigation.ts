export enum MainBottomTab {
  HomeScreen = 'HomeScreen',
  WorkoutScreen = 'WorkoutScreen',
  ProfileScreen = 'ProfileScreen',
}

export enum WorkoutStack {
  PlanWorkoutScreen = 'PlanWorkoutScreen',
  WorkoutScreen = 'WorkoutScreen',
  WorkoutScoreScreen = 'WorkoutScoreScreen',
  FinishWorkoutScreen = 'FinishWorkoutScreen',
  WorkoutDetailsScreen = 'WorkoutDetailsScreen',
}

export enum ExerciseStack {
  ExerciseScreen = 'WorkoutExerciseScreen',
  ExerciseDetailsScreen = 'ExerciseDetailsScreen',
  ExerciseFinishedScreen = 'WorkoutExerciseFinishedScreen',
  ExerciseCancelScreen = 'ExerciseCancelScreen',
}

export enum DrawerStack {
  MainBottomNavigation = 'MainBottomNavigation',
  Profile = 'Profile',
  Settings = 'Settings',
}

export enum MainStack {
  MainBottomTab = 'MainBottomTab',
  ExerciseStack = 'ExerciseStack',
  WorkoutStack = 'WorkoutStack',
}
