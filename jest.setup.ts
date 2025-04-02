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

jest.mock('@react-native-async-storage/async-storage', () => ({
  __esModule: true,
  default: {
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  },
}));
