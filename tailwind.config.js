module.exports = {
  content: ['./public/*.{html,js}'],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.50em',
      Extrawide: '1em',
    },
    screens: {
      xs: '499px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    colors: {
      white: '#fff',
      'orange-500': '#ff9100',
      black: '#000',
      grey: '#f5f5f5',
      blue: '#00bcd4',
      brown: '80431b',
      red: '#f44336',
    },
    fontFamily: {},
    extend: {},
  },
}
