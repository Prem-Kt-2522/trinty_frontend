/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            oswald: "Oswald, sans-serif",
            urbanist: "Urbanist, sans-serif",
        },
        extend: {

      keyframes: {
        slideSearchwindow: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        slideSearchwindow: 'slideSearchwindow 0.5s ease forwards',
      },
        },
    },
    plugins: [],
};
