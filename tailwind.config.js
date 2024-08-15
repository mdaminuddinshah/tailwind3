/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      blur: {
        'xs': '1px',
        'sm': '2px'
      },
      keyframes: {
        complexAnimation: {
          '0%': { transform: 'rotate(45deg)', opacity: '1', backgroundColor: 'red' },
          '25%': { transform: 'rotate(135deg)', opacity: '0.75', backgroundColor: 'yellow' },
          '50%': { transform: 'rotate(225deg)', opacity: '0.5', backgroundColor: 'green' },
          '75%': { transform: 'rotate(315deg)', opacity: '0.75', backgroundColor: 'blue' },
          '100%': { transform: 'rotate(360deg)', opacity: '1', backgroundColor: 'red' },
        },
      },
      animation: {
        complexAnimation: 'complexAnimation 4s ease-in-out infinite',
      },
      width: {
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
        '152': '38rem',
        '160': '40rem',
        '168': '42rem',
        '176': '44rem',
        '184': '46rem',
        '192': '48rem',
        '200': '50rem',
        '208': '52rem',
        '216': '54rem',
        '224': '56rem',
        '232': '58rem',
        '240': '60rem',
        '248': '62rem',
        '256': '64rem',
        '264': '66rem',
        '272': '68rem',
        '280': '70rem'
      },
      height: {
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
        '152': '38rem',
        '160': '40rem',
        '168': '42rem',
        '176': '44rem',
        '184': '46rem',
        '192': '48rem',
        '200': '50rem',
        '208': '52rem',
        '216': '54rem',
        '224': '56rem',
        '232': '58rem',
        '240': '60rem',
        '248': '62rem',
        '256': '64rem',
        '264': '66rem',
        '272': '68rem',
        '280': '70rem'
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover'], // Enable hover state for animations
    },
  },
  plugins: [],
}

