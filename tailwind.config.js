module.exports = {
  purge: false,
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extends: {
    },
    colors: {},
    screens: {
      'xsm': '100px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
    borderColor: {
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
