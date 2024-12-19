/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#00796B',
        dark: '#000',
        neutral: '#FAF9F8',
      },
      screens: {
        sm: '640px',
        
        md: '784px',
      
        lg: '1024px',
        
        xl: '1280px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        irish: ['"Irish Grover"', 'cursive'],
      },
    },
  },
  plugins: [],
}