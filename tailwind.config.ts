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
          orange: {
            DEFAULT: "#FF7000",
            bright: "#FF8800",
            deep: "#E65100",
            vibrant: "#FF5500",
            soft: "#FFA040",
          },
          yellow: {
            DEFAULT: "#FFC700",
            bright: "#FFD600",
            warm: "#F59E0B",
            soft: "#FEF08A",
            pale: "#FFFBEB",
          },
          amber: {
            DEFAULT: "#FF7000",
            light: "#FF9800",
            dark: "#E65100",
            glow: "#FFD600",
          },
          cream: {
            DEFAULT: "#FFFDF7",
            warm: "#FFF9EE",
            card: "#FFFFFF",
            dark: "#FDE68A",
          },
          green: {
            DEFAULT: "#15803D",
            deep: "#166534",
            light: "#22C55E",
            sage: "#86EFAC",
            soft: "#DCFCE7",
          },
          dark: {
            DEFAULT: "#18181B",
            card: "#27272A",
            muted: "#52525B",
          }
        }
      },
      fontFamily: {
        display: ["Outfit", "Plus Jakarta Sans", "sans-serif"],
        serif: ["Outfit", "Plus Jakarta Sans", "sans-serif"],
        sans: ["Outfit", "Plus Jakarta Sans", "sans-serif"],
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
