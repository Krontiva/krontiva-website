import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        // Display
        'd1': ['72px', { lineHeight: '88px', letterSpacing: '-2%' }],
        'd2': ['60px', { lineHeight: '64px', letterSpacing: '-2%' }],
        'd3': ['48px', { lineHeight: '56px', letterSpacing: '-2%' }],
        
        // Heading
        'h1': ['40px', { lineHeight: '48px', letterSpacing: '-2%' }],
        'h2': ['32px', { lineHeight: '40px', letterSpacing: '-2%' }],
        'h3': ['24px', { lineHeight: '32px', letterSpacing: '-1%' }],
        'h4': ['20px', { lineHeight: '28px', letterSpacing: '-1%' }],
        
        // Body
        'b1': ['18px', { lineHeight: '28px' }],
        'b2': ['16px', { lineHeight: '24px' }],
        'b3': ['14px', { lineHeight: '20px' }],
        
        // Caption
        'c1': ['12px', { lineHeight: '16px' }],
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-jakarta)'],
      },
    },
  },
  plugins: [],
};

export default config;
