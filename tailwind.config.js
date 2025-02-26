// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Make sure this matches your file paths
  ],
  theme: {
    extend: {
      fontFamily: {
        antonio: ["Antonio", "sans-serif"], // Add the Antonio font here
      },
    },
  },
  plugins: [],
};
