/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(33, 83%, 97%)',
            '100': 'hsl(33, 83%, 94%)',
            '200': 'hsl(33, 83%, 86%)',
            '300': 'hsl(33, 83%, 76%)',
            '400': 'hsl(33, 83%, 64%)',
            '500': 'hsl(33, 83%, 50%)',
            '600': 'hsl(33, 83%, 40%)',
            '700': 'hsl(33, 83%, 32%)',
            '800': 'hsl(33, 83%, 24%)',
            '900': 'hsl(33, 83%, 16%)',
            '950': 'hsl(33, 83%, 10%)',
            DEFAULT: '#efab56'
        },
        secondary: {
            '50': 'hsl(36, 60%, 97%)',
            '100': 'hsl(36, 60%, 94%)',
            '200': 'hsl(36, 60%, 86%)',
            '300': 'hsl(36, 60%, 76%)',
            '400': 'hsl(36, 60%, 64%)',
            '500': 'hsl(36, 60%, 50%)',
            '600': 'hsl(36, 60%, 40%)',
            '700': 'hsl(36, 60%, 32%)',
            '800': 'hsl(36, 60%, 24%)',
            '900': 'hsl(36, 60%, 16%)',
            '950': 'hsl(36, 60%, 10%)',
            DEFAULT: '#453011'
        },
        'neutral-50': '#000000',
        'neutral-100': '#f9f6f4',
        foreground: '#000000'
    },
    fontFamily: {
        body: [
            'ENDisplay',
            'sans-serif'
        ]
    },
    fontSize: {
        '16': [
            '16px',
            {
                lineHeight: 'normal'
            }
        ],
        '21.28': [
            '21.28px',
            {
                lineHeight: '25.536px',
                letterSpacing: '-0.266px'
            }
        ],
        '13.3333': [
            '13.3333px',
            {
                lineHeight: 'normal'
            }
        ],
        '11.904': [
            '11.904px',
            {
                lineHeight: '11.904px',
                letterSpacing: '-0.71424px'
            }
        ]
    },
    spacing: {
        '3': '6px',
        '12': '24px',
        '32': '64px',
        '51px': '51px'
    },
    borderRadius: {
        lg: '12px',
        full: '9999px'
    },
    boxShadow: {
        xl: 'rgba(23, 15, 7, 0.24) 0px 24px 60px 0px'
    },
    transitionDuration: {
        '150': '0.15s',
        '200': '0.2s',
        '240': '0.24s',
        '250': '0.25s',
        '300': '0.3s',
        '3000': '3s'
    }
},
  },
};
