import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nutri: {
          green: {
            DEFAULT: "#1B3B2B",
            deep: "#11261B",
            light: "#2D5A40",
            sage: "#4A7C59",
            soft: "#88AB75",
          },
          amber: {
            DEFAULT: "#E88D14",
            light: "#F4A261",
            dark: "#D97706",
            glow: "#FFB703",
          },
          cream: {
            DEFAULT: "#FCF8F2",
            warm: "#F5EFE6",
            card: "#F9F5EE",
            dark: "#EFE6D8",
          },
          dark: {
            DEFAULT: "#1A1D1A",
            card: "#242825",
            muted: "#3A3F3B",
          }
        }
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        handwriting: ["Caveat", "cursive"]
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
      }
    },
  },
  plugins: [],
};

export default config;
