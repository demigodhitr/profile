/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'cyber-pink': '#ff00ff',
        'cyber-cyan': '#00ffff',
        'cyber-green': '#00ff00',
        'cyber-purple': '#8a2be2',
        'cyber-orange': '#ff6600',
        'dark-bg': '#0a0a0a',
        'dark-secondary': '#1a1a1a',
        'dark-tertiary': '#2a2a2a',
        'text-primary': '#ffffff',
        'text-secondary': '#cccccc',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(120deg)' },
          '66%': { transform: 'translateY(10px) rotate(240deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px currentColor' },
          '100%': { boxShadow: '0 0 20px currentColor' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
  safelist: [
    'text-cyber-cyan',
    'text-cyber-pink',
    'text-cyber-green',
    'text-cyber-purple',
    'border-cyber-cyan',
    'border-cyber-pink',
    'border-cyber-green',
    'border-cyber-purple',
    'bg-cyber-cyan',
    'bg-cyber-pink',
    'bg-cyber-green',
    'bg-cyber-purple',
    'from-cyber-cyan',
    'from-cyber-pink',
    'from-cyber-green',
    'from-cyber-purple',
    'to-cyber-cyan',
    'to-cyber-pink',
    'to-cyber-green',
    'to-cyber-purple',
    'hover:text-cyber-cyan',
    'hover:text-cyber-pink',
    'hover:text-cyber-green',
    'hover:border-cyber-cyan',
    'hover:border-cyber-pink',
    'hover:border-cyber-green',
  ],
};