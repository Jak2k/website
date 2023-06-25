import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  theme: {
    fontFamily: {
      sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      serif: ["Texturina", ...defaultTheme.fontFamily.serif],
      mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
