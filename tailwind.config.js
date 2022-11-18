module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--text-color)",
          iconBase: "var(--icon-content)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--fill-color)",
          nav: "var(--nav-color)",
          iconBg: "var(--icon-bg)",
          iconActive: "var(--icon-content)"
        },
      },
      colors: {
        skin: {
          titleGradientOne: "var(--title-gradient-one)",
          titleGradientTwo: "var(--title-gradient-two)",
          iconActive: "var(--icon-content)",
        },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      borderRadius: ['hover'],
    },
  },
}
