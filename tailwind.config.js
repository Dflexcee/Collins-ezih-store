/* *@type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layout/**/*.{liquid,json,js}",
  "./sections/**/*.{liquid,json,js}",
  "./smippets/**/*.{liquid,json,js}",
  "./templates/**/*.{liquid,json,js}",
  "./templates/customers/**/*.{liquid,json,js}",
],
  
  theme: {
    extend: {},
  },
  plugins: [],
};