/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './index.html',
    './about/index.html',
  ],
  safelist: [
    {
      pattern: /^(from|via|to|bg|text|border)-(pink|rose|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia)-(300|400|600)$/,
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
