/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#bdf9a4",

          secondary: "#d6a908",

          accent: "#ffccd7",

          neutral: "#191B1F",

          "base-100": "#FFFFFF",

          info: "#92C7E2",

          success: "#1EBE66",

          warning: "#E29F03",

          error: "#FC4063",
        },
      },
    ],
  },
};
