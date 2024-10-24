/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}', // Include all JS/TS/React files
        './src/**/*.scss' // Include SCSS files
    ],
    theme: {
        extend: {}
    },
    plugins: []
};
