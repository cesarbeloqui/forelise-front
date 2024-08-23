/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
function textStrokeColor({ addUtilities, theme }) {
  const textStrokeValues = theme("textStroke");
  const colors = theme("colors");

  const textStrokeUtilities = Object.entries(textStrokeValues).reduce(
    (acc, [key, value]) => {
      Object.entries(colors).forEach(([colorName, colorValue]) => {
        acc[`.text-stroke-${key}-${colorName}`] = {
          "-webkit-text-stroke": `${value} ${colorValue}`,
          "text-stroke": `${value} ${colorValue}`, // Para navegadores compatibles
          color: "transparent",
        };
      });
      return acc;
    },
    {}
  );

  addUtilities(textStrokeUtilities, ["responsive", "hover"]);
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
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
      placeholderColor: "#B2A9A1",
      placeholderColorFocus: "#655442",
    },
    extend: {
      borderColor: {
        transparent: "transparent",
      },
    },
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
    },
    textStroke: {
      default: "1px",
      1: "1px",
      2: "2px",
      4: "4px",
    },
  },
  plugins: [flowbite.plugin(), textStrokeColor],
};
