/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        'lightYellow': '#FFFACD',
        'lightGrey': '#D3D3D3',
        'silver': '#C0C0C0',
        'gray': '#808080',
        'darkGray': '#363636',
        'logo': '#edebeb',
      },
    },
  },
  plugins: [],
}

