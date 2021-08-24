module.exports = {
  purge: [
    './src/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'hsl(225, 100%, 94%)',
          200: 'hsl(245, 75%, 52%)'
        },
        neutral: {
          100: 'hsl(225, 100%, 98%)',
          200: 'hsl(224, 23%, 55%)',
          300: 'hsl(223, 47%, 23%)'
        }
      },
      fontFamily: {
        body: ['Red Hat Display']
      },
      boxShadow: {
        blue: '0 16px 32px -12px hsla(245, 75%, 52%, 0.64)'
      },
      fontWeight: {
        regular: 500,
        medium: 700,
        black: 900
      },
      backgroundImage: {
        bgMobile: "url('/assets/images/pattern-background-mobile.svg')",
        bgDesktop: "url('/assets/images/pattern-background-desktop.svg')", 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
