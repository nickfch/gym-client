import 'react-native-gesture-handler/jestSetup';

// Mock expo-asset
jest.mock('expo-asset');

// Mock expo-constants
jest.mock('expo-constants', () => ({
  Constants: {
    manifest: {
      extra: {
        apiUrl: 'https://test-api.example.com',
      },
    },
  },
}));

// Mock fetch
global.fetch = require('jest-fetch-mock');
