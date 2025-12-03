/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [animations],
};
