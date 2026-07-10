/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1c1a16",
        "ink-soft": "#6b675f",
        line: "#e8e3d8",
        panel: "#ffffff",
        "panel-muted": "#f6f4ef",
        bg: "#100e0b",
        gold: {
          DEFAULT: "#c9a24a",
          deep: "#a8842f",
          tint: "#f1e6c9",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        md2: "10px",
        lg2: "16px",
      },
      boxShadow: {
        card: "0 12px 30px rgba(20, 16, 8, 0.08)",
        "card-hover": "0 20px 40px rgba(20, 16, 8, 0.14)",
      },
    },
  },
  plugins: [],
};