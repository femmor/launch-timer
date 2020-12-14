module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'grayish-blue': "#8486a9",
      'soft-red': "#fb6087",
      'dark-desaturated-blue': '#343650',
      'deep-dark-blue': '#1e1f29'
     }),
    extend: {
      backgroundImage: theme => ({
        'bg-stars-pattern': "url('/images/bg-stars.svg')",
        'pattern-hills': "url('/images/pattern-hills.svg')",
       }), 
      textColor: theme => theme('colors'),
       textColor: {
        'grayish-blue': "#8486a9",
        'soft-red': "#fb6087",
        'dark-desaturated-blue': '#343650',
        'deep-dark-blue': '#1e1f29',
        "text-white": "#fff",
        "text-gray-light": "#DCDCDC"
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
 }