module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/operators',
        permanent: true,
      },
    ]
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
