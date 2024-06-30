import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        dark: {
          1: '#1C1F2E',
          2: '#161925',
          3: '#252A41',
          4: '#1E2757',
        },
        blue: {
          1: '#0E78F9',
        },
        sky: {
          1: '#C9DDFF',
          2: '#ECF0FF',
          3: '#F5FCFF',
        },
        orange: {
          1: '#FF742E',
        },
        purple: {
          1: '#830EF9',
        },
        yellow: {
          1: '#F9A90E',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        hero: "url('/images/new.jpg')",
        'purple-1': "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Ey_Do9VFdXyWt_a_PcfwbgTRMpvfFMv2bA&s')",
        'orange-1': "url('https://image.cnbcfm.com/api/v1/image/106964727-1634927708871-gettyimages-1299485520-marina6_0249.jpeg?v=1653563935&w=929&h=523&vtcrop=y')",
        'yellow-1': "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2enm_mE_fXVYNu_V5VIdUD5l1_lVAQnVeg&s')",
        'sky-1': "url('/images/sky-bg.jpg')",
      },
      backgroundSize: {
        'full': '100%',
        'cover': 'cover',
        'contain': 'contain',
      },
      backgroundRepeat: {
        'no-repeat': 'no-repeat',
        'repeat': 'repeat',
        'repeat-x': 'repeat-x',
        'repeat-y': 'repeat-y',
      },
      backgroundPosition: {
        'center': 'center',
      },

    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
