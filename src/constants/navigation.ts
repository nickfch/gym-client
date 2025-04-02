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
  PlanWeeklyWorkoutsScreen = 'PlanWeeklyWorkoutsScreen',
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
  AuthStack = 'AuthStack',
  MainBottomTab = 'MainBottomTab',
  ExerciseStack = 'ExerciseStack',
  WorkoutStack = 'WorkoutStack',
}

export enum AuthStack {
  SignUpScreen = 'SignUpScreen',
  SignInScreen = 'SignInScreen',
}
