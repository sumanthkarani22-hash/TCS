/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#185FA5',
          50: '#EAF2FA',
          100: '#CEE1F2',
          200: '#9DC3E5',
          300: '#6CA5D8',
          400: '#3B87CB',
          500: '#1E70B8',
          600: '#185FA5',
          700: '#134B82',
          800: '#0E3760',
          900: '#0A253F',
        },
        navy: {
          DEFAULT: '#0B2545',
          50: '#E9EDF2',
          100: '#C7D1DE',
          400: '#233E5F',
          600: '#0B2545',
          700: '#081A32',
          900: '#050F1D',
        },
        success: {
          DEFAULT: '#2F9E64',
          50: '#E9F7EF',
          100: '#C9EBD8',
          600: '#2F9E64',
          700: '#227A4C',
        },
        gold: {
          DEFAULT: '#C89B3C',
          50: '#FBF6EA',
          100: '#F3E6C4',
          300: '#E0C377',
          600: '#C89B3C',
          700: '#A87F2B',
        },
        sky: {
          DEFAULT: '#EAF3FB',
        },
        // ── Turvi HR palette (site-wide). The legacy tokens above are frozen: the approved
        //    hero (VideoHero.tsx) is locked and still draws on them.
        brand: {
          navy: '#0B1F33',
          'navy-light': '#14304D',
          blue: '#1C619D',
          'blue-dark': '#154E80',
          sky: '#8DBBE6',
          gold: '#D9A62E',
          off: '#F7F8FA',
          charcoal: '#17202A',
          border: '#E5E9EF',
        },
        ink: '#101828',
        slate: '#5B6472',
        line: '#E4E8EE',
        cloud: '#F6F8FB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        head: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.03em',
        label: '0.18em',
      },
      boxShadow: {
        soft: '0 10px 40px -14px rgba(11,37,69,0.18)',
        lift: '0 28px 70px -20px rgba(11,37,69,0.32)',
        hairline: '0 1px 2px rgba(11,31,51,0.05)',
        panel: '0 18px 40px -22px rgba(11,31,51,0.28)',
        card: '0 1px 2px rgba(11,37,69,0.04), 0 8px 20px -10px rgba(11,37,69,0.10), 0 24px 48px -24px rgba(11,37,69,0.12)',
        'card-lg': '0 2px 4px rgba(11,37,69,0.05), 0 16px 32px -12px rgba(11,37,69,0.14), 0 36px 64px -28px rgba(11,37,69,0.16)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        'line-grow': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
};
