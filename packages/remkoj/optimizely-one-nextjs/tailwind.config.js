/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.tsx',
  ],
  theme: {
    extend: {

    },
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'oo-ui' })
  ],
  prefix: 'oo-',
  important: true
}

