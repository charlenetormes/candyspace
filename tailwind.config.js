/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                "custom-gray": {
                    500: "#828282",
                    400: "#b1b1b1",
                    100: "#f8f9fa",
                },
                "custom-white": { 500: "#D4D4D2", 400: "#eaeae9" },
                "custom-dark-gray": { 500: "#505050", 400: "#929292" },
                "custom-orange": {
                    500: "#FF9500",
                    400: "#ffbd60",
                    300: "#ffb040",
                    100: "#EFE8DE",
                },
            },
        },
    },
    plugins: [],
};
