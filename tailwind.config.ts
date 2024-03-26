import type { Config } from "tailwindcss";

const config = {
  mode: "jit",

  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./app/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      colors: {
        error: "#ef4444",
        olive: "#00695C",
        border: "hsl(var(--border))",
        input: "var(--input)",
        ring: "var(--ring)",
        foreground: "var(--foreground)",
        background: "var(--background)",
        featured: "var(--featured)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)", //16
        md: "calc(var(--radius) - 2px)", //14
        sm: "calc(var(--radius) - 4px)", //12
        xs: "calc(var(--radius) - 8px)", //8
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
      gridTemplateColumns: {
        new4: "repeat(4, minmax(100px, 500px))",
        repeat_115: "repeat(auto-fit, minmax(115px, 1fr))",
      },
    },
    screens: {
      "3xl": { max: "1540px" },
      "2xl": { max: "1300px" },
      xl: { max: "1200px" },
      lg: { max: "990px" },
      amd: { max: "850px" },
      md: { max: "789px" },
      ss: { max: "650px" },
      sm: { max: "550px" },
      axs: { max: "400px" },
      xs: { max: "375px" },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
} satisfies Config;

export default config;
