import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      // center: 'true',
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
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
      backgroundImage: {
        "others-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(153, 153, 153, 0) 100%)",
        "custom-gradient": `
          linear-gradient(0deg, rgba(212, 232, 255, 0.08), rgba(212, 232, 255, 0.08)),
          linear-gradient(180deg, rgba(212, 232, 255, 0.08) 0%, rgba(212, 232, 255, 0) 100%)
        `,
        "newsletter-gradient":
          "linear-gradient(172.01deg, #570AFF -101.1%, #8044FF 79.42%)",
        "uni-gradient":
          "linear-gradient(90deg, rgba(153, 169, 255, 0.24) 0%, rgba(153, 192, 255, 0.24) 50%, rgba(204, 234, 255, 0.24) 100%)",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        // 'accordion-down': {
        // 	from: {
        // 		height: '0'
        // 	},
        // 	to: {
        // 		height: 'var(--radix-accordion-content-height)'
        // 	}
        // },
        // 'accordion-up': {
        // 	from: {
        // 		height: 'var(--radix-accordion-content-height)'
        // 	},
        // 	to: {
        // 		height: '0'
        // 	}
        // }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
