module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
     backgroundImage: theme => ({
        'landing-page': "url('./img/xl-hero-desktop_2021.webp')",
       }),

       backgroundPosition: {
        '1/2': '50%',
        '2/2.5': '40% 100%',
       },

       backgroundSize: {
         'auto-100%': 'auto 100%',
         'auto-50%': 'auto 50%',
       },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
