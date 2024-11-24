/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        verydarkblue: "var(--Very-dark-blue)",
        darkgrayishblue: "var(--Dark-grayish-blue)",
        grayishblue: "var(--Grayish-blue)",
        lightgrayishblue: "var(--Light-grayish-blue)",
        orangebg: "var(--Orange)",
        paleorangebg: "var(--Pale-orange)",
      },
      backgroundColor: {
        orangebg: "var(--Orange)",
        paleorangebg: "var(--Pale-orange)",
      },
      borderColor: {
        orangebg: "var(--Orange)",
        paleorangebg: "var(--Pale-orange)",
      },
    },
  },
  plugins: [],
};
