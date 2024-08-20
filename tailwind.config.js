/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      fondoMarron: "#3E2913",
      fondoBeige: "#FEF5ED",
      letraClarita: "#FDE5D2",
      fondoBlanco: "#FFFFFF",
      letraBlanca: "#FFFFFF",
      naranjaNav: "#F47F20",
      naranjaBotonYSubProductos: "#F6994D",
      letraMarron: "#655442",
    },
    extend: {
      borderColor: {
        transparent: "transparent",
      },
    },
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
    },
  },
  plugins: [],
};
