/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Tailwind CSS screen sizes
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
        // '2xl': '1536px',

        // Custom screen sizes
        '2xs': '360px',
        '2xs-custom': '420px',
        'xs': '480px', // Custom screen size between extra-small and small
        'xs-custom': '560px', // Custom screen size between extra-small and small
        'sm-custom': '704px', // Custom screen size between small and medium
        'md-custom': '896px', // Custom screen size between medium and large
        'lg-custom': '1152px', // Custom screen size between large and extra-large
        'xl-custom': '1408px', // Custom screen size between extra-large and 2xl
        '610px': '610px',
        '610px': '610px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.content-empty::before': {
          content: '""',
        },
      });
    }
  ],
}