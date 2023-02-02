/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-menu': "url('/src/assets/images/mobilemenuimage.png')",
      }
    },
  },
	plugins: [
		require("tailwindcss-animate"),
	],
};
