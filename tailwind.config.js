/* eslint-disable no-unused-vars */



/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "2px 2px 5px 0px rgba(0,0,0,0.75)",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"]
    },
  },
  variants: {
    extend: {
      borderColor: ["focus"], // Enable focus variant for borderColor
      textColor: ["focus"], // Enable focus variant for textColor
      placeholderColor: ["focus"], // Enable focus variant for placeholderColor
    },

    
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
