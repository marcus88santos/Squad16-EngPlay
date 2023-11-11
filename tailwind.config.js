/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/commom/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "azul-escuro": "#0A103F",
      'vermelho-diferente': "#C13636"
    },
  },
  plugins: [],
};
