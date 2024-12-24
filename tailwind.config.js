/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    // height: {
    //   '30rem': '30rem',
    //   '15rem':'15rem' ,
    // },
  },
  plugins:[require('tailwind-scrollbar-hide')],
}

