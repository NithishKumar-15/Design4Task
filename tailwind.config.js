/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'headerbackroundimg':"url('https://www.visitgreece.gr/images/1743x752/jpg/files/merakos_05_santorini-oia_1743x752.webp')",
      }
    },
  },
  plugins: [],
}

