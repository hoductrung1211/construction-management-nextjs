import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      width: {
        '76': '19rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '140': '35rem',
        '160': '40rem',
        '180': '45rem',
        '200': '50rem',
        '220': '55rem',
        '240': '60rem',
        '260': '65rem',
        '280': '70rem',
      },
      height: {
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '140': '35rem',
        '160': '40rem',
        '180': '45rem',
        '200': '50rem',
        '220': '55rem',
        '240': '60rem',
      }, 
      colors: {
        'color-btn-send': '#487EB0',
        'color-btn-save':'#1ABC9C',
        'background-workitem': 'F2F2F7',
        'text-color':'#8E8E93',
        'background-color': '#F2F2F7',
        'primary': '#487EB0',
        'secondary': '#77A8D5',
        'success': '#1abc9c',
        'info': '#3498db',
        'warning': '#F1C40F',
        'error': '#E74C3C',

        'dark': '#202124',
        'subdued': '#F5F5F5',
        'content': '#F9FAFB',

        'apple-gray': '#8E8E93',
        'apple-gray-2': '#AEAEB2',
        'apple-gray-3': '#C7C7CC',
        'apple-gray-4': '#D1D1D6',
        'apple-gray-5': '#E5E5EA',
        'apple-gray-6': '#F2F2F7',
      },
      backdropBlur: {
        'xs': '2px'
      },
      lineHeight: {
        '14': '3.5rem'
      },
      keyframes: {
        'fade-in': {
          '0%': {
            // 'background-color': '#7f8c8d'
            'opacity': '0.4'
          },
          '100%': {
            // 'background-color': '#00000099'
            'opacity': '1'
          }
        },
        'zoom-in': {
          '0%': {
            // 'background-color': '#7f8c8d'
            'transform': 'scale(0.8) translateY(-10%)', 
          },
          '100%': {
            // 'background-color': '#00000099'
            'transform': 'scale(1) translateY(0)', 
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 100ms ease-in-out forwards',
        'zoom-in': 'zoom-in 200ms ease-out forwards'
      }
    },
  },
  plugins: [],
}
export default config
