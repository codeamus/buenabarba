/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
