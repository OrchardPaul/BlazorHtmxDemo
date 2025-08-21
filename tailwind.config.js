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
        'primarycol': '#2efa49ff',
        'secondarycol': '#cd4e9cff',
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