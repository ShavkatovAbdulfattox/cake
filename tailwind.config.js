/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      width: {
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        42: "42px",
        80: "80px",
        150: "150px",
        225: "225px",
        300: "300px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        650: "650px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        headingColor: "#2e2e2e",
        textColor: "#464646",
        pink: "#D95C6A",
        primary: "#f5f3f3",
      },
      fontFamily: {
        Montserrat700: ['"Montserrat700"', "serif"],
        Raleway300: ['"Raleway300"', "serif"],
        Montserrat500: ['"Montserrat500"', "serif"],
        Junegull: ['"Junegull"', "serif"],
        Boorsok: ['"Boorsok"', "serif"],
      },
      boxShadow: {
        button: "0px 4px 30px 0px",
      },
      dropShadow: {
        "3xl": "5px 45px 95px #fff",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },

      plugins: [],
    },
  },
};
