/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        screens: {
            xs: "400px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            colors: {
                // Sage green palette based on #919682
                primary: {
                    50: "#f5f6f4",
                    100: "#e8ebe5",
                    200: "#d4d9cc",
                    300: "#b8c0ad",
                    400: "#a4ac97",
                    500: "#919682",
                    600: "#7a826d",
                    700: "#636a59",
                    800: "#4f5447",
                    900: "#414539",
                    950: "#23251f",
                },
                // Accent colors from Evergreen Dreams palette
                accent: {
                    warm: "#C7A491",
                    blush: "#EECFCA",
                    // Primary accent colors (last 3 from palette)
                    sage: "#919682",
                    cool: "#C7CDBF",
                    dark: "#595E48",
                },
                secondary: colors.stone,
                base: colors.neutral,
                info: colors.sky[400],
                "info-content": colors.slate[900],
                success: colors.emerald[400],
                "success-content": colors.slate[900],
                warning: colors.amber[400],
                "warning-content": colors.slate[900],
                error: colors.rose[400],
                "error-content": colors.slate[900],
            },
            animation: {
                marquee: "marquee 100s linear infinite",
            },
            keyframes: {
                marquee: {
                    from: {
                        transform: "translateX(0)",
                    },
                    to: {
                        transform: "translateX(calc(-100% - 2.5rem))",
                    },
                },
            },
        },
        fontFamily: {
            sans: [
                "Poppins",
                "BlinkMacSystemFont",
                "-apple-system",
                "Segoe UI",
                "Roboto",
                "Helvetica",
                "Arial",
                "sans-serif",
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol",
            ],
            serif: [
                "Iowan Old Style",
                "Apple Garamond",
                "Baskerville",
                "Times New Roman",
                "Droid Serif",
                "Times",
                "Source Serif Pro",
                "serif",
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol",
            ],
            mono: [
                "SFMono-Regular",
                "Menlo",
                "Monaco",
                "Consolas",
                "Liberation Mono",
                "Courier New",
                "monospace",
            ],
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
    ],
};
