module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["Titillium Web"],
    },
    extend: {
      colors: {
        bgpurple: "#322f43",
      },
      screens: {
        xs: { max: "400px" },
      },
    },
  },
};
