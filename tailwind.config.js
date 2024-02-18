/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['Lobster', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
        Roboto : ["Roboto", 'sans-serif']
        

      },
      backgroundImage: {
        sidebarBack: 'url(./assets/Image/sidebar_background.jpg) ',
        RegBackground: 'url(./assets/Image/fontBackground.png) ',
        fontImage: 'url(./assets/Image/RegLginFont.gif) ',
        LoginBackground: 'url(./assets/Image/LoginBG.jpg) ',
       

      },
      colors: {
        regColor: '#0abde3',
        overflow : 'rgba(223, 228, 234,.8)',
        overflowIcon : 'rgba(223, 228, 234,.7)',
        overflowLogin : 'rgba(223, 228, 234,.8)',
        overlay : 'rgba(0, 0, 0, 0.41)',
        btnColor : '#3867d6',
        offWhite : '#f1f2f6',
        hoverBG : 'rgba(75, 75, 75, .7)',
        primaryColor: '#1c1e21',
        crossHoverBG : '#4B4C4F',
        borderColor: '#3A3B3C',
        sceondColor: 'black',

        textColor: '#f5f6fa'
       
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(46, 204, 113, 6.9)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      maxWidth : {
        container : '1140px'
      }
    },
  },
  plugins: [],
}