const defaultTheme = require('tailwindcss/defaultTheme')

/**
 * @type {import('tailwindcss/defaultConfig')
 */
module.exports = {
  mode: 'jit',
  purge: ['./app/**/*.tsx'],
  darkMode: 'media',
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
