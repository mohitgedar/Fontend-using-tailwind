/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        playfair:"'playfair Display',serif",//this line is to add your own font ,here the lhs of : is the name you want to use , remember your also need to import the font in input.css
        lato:" 'Lato',serif"
      }
    },
  },
  plugins: [],
}

