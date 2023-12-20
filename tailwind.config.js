const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            animation: {
                'spin-slow': 'spin 100s linear infinite',
                'reverse': 'spin 50s linear infinate'
              },

              keyframes: {
                reverse: {
                  from: { transform: 'rotate(360deg)' },
                  to: { transform: 'rotate(0deg)' },
                }
              },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
