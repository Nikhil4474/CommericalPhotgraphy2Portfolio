module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      secondary: "Mulish",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1192px",
    },
    extend: {
      colors: {
        primary: "#0E1112",
        grey: "#484B4B",
        "cambridge-blue": "#8DAA91",
        "weird-purple": "#A9CB",
        "rasin-black": "#272838",
        "english-violet": "#5D576B",
        "light-slate-grey": "#778DA9",
        "pomp-and-power": "#7D6B91",
        "sage": "#CCC9A1",

        accent: "#EEF7F9",
      },
    },
  },
  plugins: [],
}
