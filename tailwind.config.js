module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extends: {
    },
    colors: {},
    textColor: {
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',
      third: 'var(--third)',
      inverse: 'var(--inverse)',
      white: 'var(--white)',
      black: 'var(--black)',
    },
    backgroundColor: {
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',
      third: 'var(--third)',
      inverse: 'var(--inverse)',
      white: 'var(--white)',
      black: 'var(--black)',
    },
    fontFamily: {
      'sans': 'var(--font-sans)',
      'mono': 'var(--font-mono)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
