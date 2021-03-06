module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      'inter-bold': ['Inter-Bold', 'sans-serif'],
      'inter-light': ['Inter-Light', 'sans-serif'],
    },
    extend: {
      minWidth: {
        '3/10': '30%',
      }
    },
  },
  plugins: [],
}
