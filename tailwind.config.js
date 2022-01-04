const defaultTheme = require('tailwindcss/defaultTheme')

/**
 * @type {import('tailwindcss/defaultConfig')
 */
module.exports = {
  mode: 'jit',
  purge: ['./app/**/*.tsx'],
  darkMode: false,
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
