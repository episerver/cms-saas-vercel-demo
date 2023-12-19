const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Files to include
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',  // Implementation components
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'          // App Router
  ],

  // Theme definition
  theme: {
    extend: {
      colors: {
        /** Site primary color (navigation bar, buttons, etc...) **/
        primary: {
          ...colors.teal,
          DEFAULT: colors.teal[800],
          light: colors.teal[100],
          dark: colors.teal[900]
        },
        /** Site secondary color (buttons, interaction elements, etc...) **/
        secondary: {
          ...colors.sky,
          DEFAULT: colors.sky[600],
          light: colors.sky[200],
          dark: colors.sky[800]
        },
        /** Site stripe color (background, borders, etc...) **/
        stripe: {
          ...colors.gray,
          DEFAULT: colors.slate[200],
          light: colors.slate[100],
          dark: colors.slate[400],
          verydark: colors.slate[600]
        },
        /** Default text color */
        default: {
          ...colors.slate,
          DEFAULT: colors.slate[900],
          light: colors.slate[100],
          medium: colors.slate[600],
          dark: colors.slate[900],
          onPrimary: colors.slate[100],
          onPrimaryLight: colors.slate[900],
          onPrimaryDark: colors.slate[100],
          onSecondary: colors.slate[100],
          onSecondaryLight: colors.slate[900],
          onSecondaryDark: colors.slate[100]
        }
      },
      maxWidth: {
        '1/3': '33%',
        '1/2': '50%',
        '2/3': '66%',
        '3/4': '75%'
      },
      minHeight: {
        'block': '24rem'
      },
      padding: {
        '1/2': '50%'
      }
    }
  },

  // The classes used by the ContentArea display modes - those are not properly
  // detected by Tailwind, so they're added here as well.
  safelist: [
    'w-screen',
    'w-full',
    'w-auto',
    'w-1/2',
    'w-1/3',
    'basis-full',
    'basis-auto',
    'basis-1/2',
    'basis-1/3',
    't-center',
    'flex-row',
    'flex-col',
    'flex-row-reverse',
    'flex-col-reverse'
  ],

  // Component specific plugins
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ]
}
