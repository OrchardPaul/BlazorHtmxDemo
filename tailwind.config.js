import daisyui from 'daisyui';

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode support
  important: true, // Make Tailwind styles more specific
  content: [
    "./Components/**/*.{razor,html,js}",
    "./Components/**/**/*.{razor,html,js}",
    "./Pages/**/*.{razor,html,js}",
    "./wwwroot/**/*.html",
    "./**/*.razor"
  ],
  theme: {
    extend: {
      colors: {
        'primarycol': 'var(--primarycol)',
        'secondarycol': 'var(--secondarycol)',
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
        'muted': 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        'card': 'var(--card)',
        'border': 'var(--border)',
        'base': 'var(--base)',
        'base-50': 'var(--base-50)',
        'base-100': 'var(--base-100)',
        'base-150': 'var(--base-150)',
        'base-200': 'var(--base-200)',
        'base-250': 'var(--base-250)',
        'base-300': 'var(--base-300)',
        'base-350': 'var(--base-350)',
        'base-400': 'var(--base-400)',
        'base-450': 'var(--base-450)',
        'base-500': 'var(--base-500)',
        'base-550': 'var(--base-550)',
        'base-600': 'var(--base-600)',
        'base-650': 'var(--base-650)',
        'base-700': 'var(--base-700)',
        'base-750': 'var(--base-750)',
        'base-800': 'var(--base-800)',
        'base-850': 'var(--base-850)',
        'base-900': 'var(--base-900)',
        'base-950': 'var(--base-950)',

      }
    },
  },
  safelist: [
    'collapse',
    'collapse-arrow',
    'collapse-title',
    'collapse-content',
    'accordion',
    'accordion-item',
    'accordion-title',
    'accordion-content',
    { pattern: /^d-/ }, // Safelist all DaisyUI classes with the 'd-' prefix 
    // add any DaisyUI component classes you need
  ],
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        "light": {
          "primary": "hsl(330 100% 60%)",          // Your pink primary color
          "secondary": "hsl(200 100% 70%)",        // Your blue secondary color
          "accent": "#37cdbe",
          "neutral": "hsl(0 0% 30%)",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
        "dark": {
          "primary": "#ff5df1",          // Your pink primary color
          "secondary": "#46b5ff",        // Your blue secondary color
          "accent": "#37cdbe",
          "neutral": "hsl(0 0% 70%)",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
      "cupcake"], // Add themes you want
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "d-", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}