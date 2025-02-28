import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img': "url('/background.jpg')",
        'nexus-img': "url('/nexus/background.png')"
      },
      colors: {
        'blue': '#102542',
        'offwhite': '#f4f1e6',
        'gold': '#bf8812',
        'lightblue': '#193760',
        'black': '#000000'
      },
    },
    fontFamily: {
      'inter': ['Inter']
    }
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: []
  }
}