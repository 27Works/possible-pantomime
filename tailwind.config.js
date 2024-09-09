/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        futura_pt_bold: ["Futura PT Bold"],
        futura_pt_book: ["Futura PT Book"],
        futura_pt_demi: ["Futura PT Demi"],
        futura_pt_extrabold: ["Futura PT Extra Bold"],
        futura_pt_heavy: ["Futura PT Heavy"],
        futura_pt_light: ["Futura PT Light"],
        futura_pt_medium: ["Futura PT Medium"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
