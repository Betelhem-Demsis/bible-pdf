/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add this line
      },
      colors: {
        'btn-bg': '#11BFD7',  // Button background color
        'btn-clicked': '#4F9BA6',  // Button clicked color
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, #18C2D9 0%, #00BCD5 31.5%, #0D6773 100%)',
        'secondary-gradient': 'linear-gradient(90deg, rgba(248, 254, 255, 0.21) 0%, #D7F3F7 50%, #C4F6FD 100%)',
      },
    },
  },
  plugins: [],
}