import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#011315",
        ink2: "#031d21",
        line: "rgba(173, 236, 255, 0.12)",
        cyan: "#05bfff",
        cobalt: "#064dff",
        mist: "#eaf8ff"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 48px rgba(0, 184, 255, 0.24)",
        card: "0 18px 70px rgba(0, 0, 0, 0.22)"
      },
      backgroundImage: {
        "radial-blue": "radial-gradient(circle at 70% 48%, rgba(0, 123, 255, 0.28), transparent 34%)"
      }
    }
  },
  plugins: []
};

export default config;
