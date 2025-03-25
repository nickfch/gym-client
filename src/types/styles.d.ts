export type Colors = {
  primary: string;
  secondary: string;
  background: string;
  white: string;
  black: string;
  grey0: string;
  grey1: string;
  grey2: string;
  grey3: string;
  grey4: string;
  grey5: string;
  greyOutline: string;
  searchBg: string;
  success: string;
  warning: string;
  error: string;
  disabled: string;
  divider: string;
  platform: {
    ios: PlatformColors;
    android: PlatformColors;
    web: PlatformColors;
    default: PlatformColors;
  };
};

export type Theme = {
  colors: Colors;
  mode: 'light' | 'dark';
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
};
