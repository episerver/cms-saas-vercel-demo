import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    colors: {
      'white': '#ffffff',
      'ghost-white': '#F8F8FC',
      'light-grey': '#D9D9D9',
      'azure': '#007EFC',
      'verdansk': '#6AF388',
      'people-eater': '#9847FF',
      'paleruby': '#EB5A79',
      'tangy': '#FFAA47',
      'vulcan': '#10141D',
      'vulcan-85': '#2C313F',
      'independence': '#484F61',
      'mischka': '#CED2DC',
      'pale-sky': '#656C81',
      'currentColor': 'currentColor',
      'transparent': 'transparent',
      'inherit': 'inherit'
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontSize: '1.6rem',
            color: 'inherit',
            'h1': { color: 'inherit' },
            'h2': { color: 'inherit' },
            'h3': { color: 'inherit' },
            'h4': { color: 'inherit' },
            'h5': { color: 'inherit' },
            'h6': { color: 'inherit' },
            '.dark strong':{ color: 'var(--ghost-white)' },
          },
        },
      },
    }
  },
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
    'flex-col-reverse',
    'opti-content-area',
    'opti-content-area-item'
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    function({ addBase }: { addBase: any }) {
     addBase({
        'html': { fontSize: "10px" },
        'body': {fontSize: "1.6rem"}
      })
    },
    function ({ addBase, theme }: { addBase: any; theme: any }) {
      function extractColorVars(colorObj: Record<string, string>, colorGroup = ''): Record<string, string> {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];
          const cssVariable = colorKey === "DEFAULT" ? `-${colorGroup}` : `-${colorGroup}-${colorKey}`;

          const newVars =
            typeof value === 'string'
              ? { [cssVariable]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
};
export default config;
