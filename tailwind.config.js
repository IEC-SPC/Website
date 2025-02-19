import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'blue': '#102542',
      'offwhite': '#f4f1e6',
      'gold': '#bf8812'
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