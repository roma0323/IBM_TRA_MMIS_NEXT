import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    
    extend: {
      gridTemplateColumns: {
        // Custom 18 column grid
        "17": "repeat(17, minmax(0, 1fr))",
        "20": "repeat(20, minmax(0, 1fr))",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "on-primary": "var(--on-primary)",
        surface: "var(--surface)",
        primary: {
          DEFAULT: "#397EFF",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        城際列車: {
          DEFAULT: "#538164",
          foreground: "hsl(var(--secondary-foreground))",
        },
        電力列車: {
          DEFAULT: "#FFBB54",
          foreground: "hsl(var(--secondary-foreground))",
        },
        柴電列車: {
          DEFAULT: "#D9730D",
          foreground: "hsl(var(--secondary-foreground))",
        },
        柴液機車: {
          DEFAULT: "#C3554E",
          foreground: "hsl(var(--secondary-foreground))",
        },
        客車: {
          DEFAULT: "#00BBC7",
          foreground: "hsl(var(--secondary-foreground))",
        },
        柴油客車: {
          DEFAULT: "#9F8170",
          foreground: "hsl(var(--secondary-foreground))",
        },
        貨車: {
          DEFAULT: "#8F65AF",
          foreground: "hsl(var(--secondary-foreground))",
        },
        通勤列車: {
          DEFAULT: "#28BF02",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        "headline-1": "var(--headline-1-font-family)",
        "label-text-2": "var(--label-text-2-font-family)",
        "title-1": "var(--title-1-font-family)",
        "title-2": "var(--title-2-font-family)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
