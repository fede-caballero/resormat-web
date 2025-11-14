/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005f73',
        dark: '#333333',
        light: '#f4f4f4',
      },
      fontFamily: {
        sans: ['Engebrechtre', 'sans-serif'], // Nueva fuente por defecto para el cuerpo del texto
        'saira-stencil': ['"Saira Stencil One"', 'sans-serif'], // Nueva fuente para el logo
      },
    },
  },
  plugins: [],
}
