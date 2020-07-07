const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: false,
  theme: {
    fontFamily: {
      sans: ['Metropolis', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          default: '#ffba00'
        },
        foreground: {
          default: '#000000'
        },
        background: {
          default: '#ffffff'
        }
      },
      zIndex: {
        'neg-1': '-1'
      },
      fontSize: {
        'hero': '1.75rem'
      },
      borderWidth: {
        '3': '3px'
      },
      minWidth: {
        '32': '32em',
        '24': '24em',
      },
      width: {
        '40r': '40rem'
      }
    },
  },
  variants: {},
  plugins: [
    plugin(function({ addComponents }) {
      const buttons = {
        '.btn': {
          'font-weight': '600',
          'font-size': '1.125rem',
          'padding-top': '0.25rem',
          'padding-bottom': '0.25rem',
          'padding-left': '1.25rem',
          'padding-right': '1.25rem',
          'border-radius': '0.25rem',
          position: 'relative',
        },
        '.btn-secondary': {
          'border-color': '#ffba00',
          'border-width': '3px',

        }
      }

      addComponents(buttons)
    }),
  ],
}
