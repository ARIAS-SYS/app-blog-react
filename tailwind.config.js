/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgprimary: '#0D111D',
        bgsecondary: '#171B26',
        bgtertiary: '#3D414A',
        ftprimary: '#94969C',
        ftsecondary: '#CDCED2',
      },
    },
  },
  plugins: [],
}