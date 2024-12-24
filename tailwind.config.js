/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        customInset: 'inset 10px 10px 15px #cbced1, inset -10px -10px 15px #ffffff',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

