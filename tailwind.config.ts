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
          2: '#0E78F9',

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
        'purple-1': "url('https://thumbs.dreamstime.com/b/professional-business-woman-manager-working-office-having-virtual-meeting-busy-professional-young-african-american-business-281551854.jpg')",
        'orange-1': "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpYfQDIfINVT7ayiN5LdgpL34WUtZpUlp1IwOCP30W7iz7ZE8xj7xdvLhTykWD_47BzE&usqp=CAU')",
        'yellow-1': "url('https://as2.ftcdn.net/v2/jpg/05/49/30/65/1000_F_549306572_WNhEbMSEHQr9jlW8c8VoqxgQcPzzl5tq.jpg')",
        'blue-1': "url('https://cdn.openart.ai/stable_diffusion/79b1c7e09af6dd9cbff61a07f6485bb371d3174d_2000x2000.webp')",
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
