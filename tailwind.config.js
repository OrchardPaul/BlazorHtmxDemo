// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode support
  important: true, // Make Tailwind styles more specific
  content: [
    "./Components/**/*.{razor,html,js}",
    "./Pages/**/*.{razor,html,js}",
    "./wwwroot/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'primarycol': '#ff5df1ff',
        'secondarycol': '#46b5ffff',
        'background': 'var(--color-background)',
        'foreground': 'var(--color-foreground)',
        'muted-foreground': 'var(--color-muted-foreground)',
        'card': 'var(--color-card)',
        'border': 'var(--color-border)'
      }
    },
  },
  plugins: [],
}