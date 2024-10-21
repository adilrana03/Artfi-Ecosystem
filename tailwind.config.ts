import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2880px',
        '5xl': '3350px',
        '4k': '3700px',
      },
       fontFamily: {
        'agrandir': ['Agrandir', 'sans-serif'],
         'mulish': ['Mulish', 'sans-serif'],
         'irish-grover': ['"Irish Grover"', 'cursive'],
        'ethereal': ['Ethereal', 'sans-serif'], // Added Ethereal font family
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};

export default config;