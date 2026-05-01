// React Theme — extracted from https://picnic.katherine-le.com/
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '16': string;
    '21.28': string;
    '13.3333': string;
    '11.904': string;
 *   };
 *   space: {
    '6': string;
    '24': string;
    '51': string;
    '64': string;
 *   };
 *   radii: {
    lg: string;
    full: string;
 *   };
 *   shadows: {
    xl: string;
 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#efab56",
    "secondary": "#453011",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#f9f6f4"
  },
  "fonts": {
    "body": "'ENDisplay', sans-serif"
  },
  "fontSizes": {
    "16": "16px",
    "21.28": "21.28px",
    "13.3333": "13.3333px",
    "11.904": "11.904px"
  },
  "space": {
    "6": "6px",
    "24": "24px",
    "51": "51px",
    "64": "64px"
  },
  "radii": {
    "lg": "12px",
    "full": "9999px"
  },
  "shadows": {
    "xl": "rgba(23, 15, 7, 0.24) 0px 24px 60px 0px"
  },
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#efab56",
      "light": "hsl(33, 83%, 79%)",
      "dark": "hsl(33, 83%, 49%)"
    },
    "secondary": {
      "main": "#453011",
      "light": "hsl(36, 60%, 32%)",
      "dark": "hsl(36, 60%, 10%)"
    },
    "background": {},
    "text": {
      "primary": "#000000",
      "secondary": "#453011"
    }
  },
  "typography": {
    "fontFamily": "'Geist', sans-serif",
    "h3": {
      "fontSize": "21.28px",
      "fontWeight": "350",
      "lineHeight": "25.536px"
    },
    "body1": {
      "fontSize": "16px",
      "fontWeight": "400",
      "lineHeight": "normal"
    },
    "body2": {
      "fontSize": "11.904px",
      "fontWeight": "650",
      "lineHeight": "11.904px"
    }
  },
  "shape": {
    "borderRadius": 12
  },
  "shadows": [
    "rgba(32, 19, 8, 0.28) 0px 12px 28px 0px, rgba(234, 187, 93, 0.18) 0px 0px 18px 0px",
    "rgba(23, 15, 7, 0.24) 0px 24px 60px 0px"
  ]
};

export default theme;
