// tailwind.config.js
module.exports = {
    // ...
    theme: {
      extend: {
        animation: {
          'fade-in-down': 'fadeInDown 0.5s ease-out',
        },
        keyframes: {
          fadeInDown: {
            '0%': { opacity: 0, transform: 'translateY(-10px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        },
        fontFamily:{
          bebas: ['Bebas Neue', 'Sans-serif'],
        }
      },
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
    ]    
  };
  