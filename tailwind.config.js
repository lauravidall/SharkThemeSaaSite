export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float 20s ease-in-out infinite',
        'float-medium': 'float 15s ease-in-out infinite',
        'float-fast': 'float 10s ease-in-out infinite',
        'wave': 'wave 8s ease-in-out infinite',
        'bubble': 'bubble 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(25px, -25px) rotate(2deg)' },
          '50%': { transform: 'translate(-25px, 25px) rotate(-2deg)' },
          '75%': { transform: 'translate(-25px, -25px) rotate(2deg)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0) scaleY(1)' },
          '50%': { transform: 'translateY(-20px) scaleY(0.95)' },
        },
        bubble: {
          '0%': { transform: 'translateY(100vh) scale(1)', opacity: '0.8' },
          '100%': { transform: 'translateY(-100%) scale(2)', opacity: '0' },
        },
        waterFlow: {
          '0%': { transform: 'translateX(-100%) rotate(-45deg)' },
          '100%': { transform: 'translateX(100%) rotate(-45deg)' },
        },
      },
    },
  },
};