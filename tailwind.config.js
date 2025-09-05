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
        //Brand Colours
        'primarycol': 'var(--primarycol)',
        'secondarycol': 'var(--secondarycol)',
        'accentcol': 'var(--accentcol)',
        'neutralcol': 'var(--neutralcol)',
        'primarycol-foreground': 'var(--primarycol-foreground)',
        'secondarycol-foreground': 'var(--secondarycol-foreground)',
        'accentcol-foreground': 'var(--accentcol-foreground)',
        'neutralcol-foreground': 'var(--neutralcol-foreground)',
        //Background Colors
        'background': 'var(--base)',
        'base': 'var(--base)',
        'base-100': 'var(--base-100)',
        'base-200': 'var(--base-200)',
        'base-300': 'var(--base-300)',
        'base-400': 'var(--base-400)',
        'base-500': 'var(--base-500)',
        'card': 'var(--card)',
        //Text Colors
        'foreground': 'var(--foreground)',
        'foreground-muted': 'var(--muted-foreground)',
        'base-foreground': 'var(--base-foreground)',
        'base-100-foreground': 'var(--base-100-foreground)',
        'base-200-foreground': 'var(--base-200-foreground)',
        'base-300-foreground': 'var(--base-300-foreground)',
        'base-400-foreground': 'var(--base-400-foreground)',
        'base-500-foreground': 'var(--base-500-foreground)',
        'card-foreground': 'var(--card-foreground)',
        //Borders
        'border': 'var(--border)',
        'border-muted': 'var(--border-muted)',
        'inputborder': 'var(--inputborder)',
        'inputborderonfocus': 'var(--inputborderonfocus)',
        //Status Colors
        'danger': 'var(--danger)',
        'warning': 'var(--warning)',
        'success': 'var(--success)',
        'info': 'var(--info)',
        //prevent use of some standard Tailwind and DaisyUI colors
        'muted': 'var(--danger)',
        'primary': 'var(--danger)', //make red,
        'secondary': 'var(--danger)',
        'accent': 'var(--danger)',
        'neutral': 'var(--danger)',
      }
    },
  },
  safelist: [
    // Group: Collapse
    'collapse',
    'collapse-arrow',
    'collapse-title',
    'collapse-content',
    // Group: Accordion
    'accordion',
    'accordion-item',
    'accordion-title',
    'accordion-content',
    // Group: DaisyUI Prefix
    { pattern: /^d-/ }, // Safelist all DaisyUI classes with the 'd-' prefix 
  ],
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [], // Add themes you want
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "d-", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}