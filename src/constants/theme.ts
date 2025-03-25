import { createTheme } from '@rneui/themed';

export const theme = createTheme({
  lightColors: {
    primary: '#4F46E5',
    background: '#F3F4F6',
  },
  darkColors: {
    primary: '#4F46E5',
    background: '#F3F4F6',
  },
  components: {
    Button: {
      raised: true,
    },
  },
});
