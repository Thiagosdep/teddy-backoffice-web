export const theme = {
  colors: {
    primary: "#EC6724",
    primaryLight: "#FF8144",
    primaryDark: "#D55A1F",
    secondary: "#EE7D46",
    secondaryLight: "rgba(238, 125, 70, 0.1)",
    background: "#F5F5F5",
    white: "#FFFFFF",
    border: "#D9D9D9",
    placeholder: "#AAAAAA",
    text: "#000000",
    textDark: "#141414",
    error: "#FF4D4F",
    success: "#52C41A",
    overlay: "rgba(0, 0, 0, 0.2)",
  },
  fonts: {
    primary: "Inter, sans-serif",
    secondary: "Geologica, sans-serif",
  },
  fontSizes: {
    xs: "14px",
    sm: "16px",
    md: "18px",
    lg: "20px",
    xl: "24px",
    xxl: "36px",
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },
  sizes: {
    headerHeight: "100px",
    sidebarWidth: "260px",
    logoHeight: "40px",
    buttonHeight: {
      sm: "40px",
      md: "56px",
      lg: "60px",
    },
    iconSize: {
      sm: "16px",
      md: "18px",
      lg: "24px",
    },
    backButtonWidth: "42px",
    backButtonGap: "12px",
    navItemIconMargin: "12px",
  },
  shadows: {
    sm: "0 2px 8px rgba(0, 0, 0, 0.1)",
    md: "2px 0 8px rgba(0, 0, 0, 0.1)",
  },
  borderRadius: "4px",
  zIndex: {
    header: 10,
    sidebar: 100,
    overlay: 90,
  },
  effects: {
    blur: "4px",
    transition: "all 0.3s ease",
  },
  lineHeight: {
    none: "100%",
    normal: "1.5",
  },
  letterSpacing: {
    none: "0%",
    normal: "0.5px",
  },
};

export type Theme = typeof theme;
