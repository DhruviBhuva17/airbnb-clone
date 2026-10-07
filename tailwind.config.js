/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Airbnb Cereal VF",
          "Circular",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        rausch: "#FF385C",
        babu: "#00A699",
        arches: "#FC642D",
        hof: "#222222",
      },
      boxShadow: {
        card: "0 6px 16px rgba(0,0,0,0.12)",
        popover: "0 2px 16px rgba(0,0,0,0.12)",
        top: "0 -6px 16px rgba(0,0,0,0.06)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scaleIn: {
          "0%": { opacity: 0, transform: "scale(0.96)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-out",
        scaleIn: "scaleIn 0.25s cubic-bezier(0.2,0.8,0.2,1)",
        slideUp: "slideUp 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
