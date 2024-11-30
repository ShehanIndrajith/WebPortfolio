import Background from 'three/src/renderers/common/Background.js';
import { color } from 'three/webgpu';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // other paths...
  ],
  theme: {
    extend: {
      colors: {
        'scrollbar-thumb': '#4A5568', // Customize the thumb color
        'scrollbar-track': '#0f172a',
        'glassindigo' : '#4f46e5',
        'violet': '#B975B5'
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        '::-webkit-scrollbar': {
          width: '0px',
        },
        '::-webkit-scrollbar-track': {
          Background: '#0f172a', // Replace with your track color
        },
        '::-webkit-scrollbar-thumb': {
          background: '#1e1b4b', // Replace with your thumb color
          borderRadius: '9999px',
        },
      });
    },
  ],
};
