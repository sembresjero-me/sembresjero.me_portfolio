/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    borderRadius: {
      custom: '2.5rem',
      full: '9999px',
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        body: 'hsl(var(--background))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'profile-picture':
          "url('https://s3.eu-west-3.amazonaws.com/sembresjero.me/sembresjero-me-main-picture.webp')",
        'last-project':
          "url('https://s3.eu-west-3.amazonaws.com/sembresjero.me/projets/guessthesneakers/sembresjero-me-cover-projet-guessthesneakers.webp')",
        'on-repeat':
          "url('https://s3.eu-west-3.amazonaws.com/sembresjero.me/sembresjero-me-cover-on-repeat-tame-impala-currents.webp')",
      },
      fontFamily: {
        instrument_sans: ['var(--custom-font-instrument_sans)'],
        instrument_serif: ['var(--custom-font-instrument_serif)'],
        nohemi: ['var(--custom-font-nohemi)'],
        bigger: ['var(--custom-font-bigger)'],
      },
      fontSize: {
        lg: [
          '1.125rem',
          {
            lineHeight: '1.5rem',
          },
        ],
        '4xl': [
          '2.25rem',
          {
            lineHeight: '2.75rem',
          },
        ],
        '8xl': [
          '6rem',
          {
            lineHeight: '1.1',
          },
        ],
      },
      boxShadow: {
        custom: '0 0px 25px -15px',
      },
      screens: {
        '3xl': '1850px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
