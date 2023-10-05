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
