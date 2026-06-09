/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ana: {
          red: 'var(--ana-red-500)',
          green: 'var(--ana-green-500)',
          navy: 'var(--ana-navy-500)',
          blue: 'var(--ana-blue-500)',
          orange: 'var(--ana-orange-500)',
          yellow: 'var(--ana-yellow-500)',
          gray: 'var(--ana-gray-900)',
          white: 'var(--ana-white)',
        },
        surface: {
          page: 'var(--color-background-page)',
          muted: 'var(--color-background-muted)',
          soft: 'var(--color-background-soft)',
          dark: 'var(--color-background-dark)',
          brand: 'var(--color-background-brand)',
          info: 'var(--color-background-info)',
          success: 'var(--color-background-success)',
          warning: 'var(--color-background-warning)',
          error: 'var(--color-background-error)',
        },
        action: {
          primary: 'var(--color-action-primary)',
          secondary: 'var(--color-action-secondary)',
          accent: 'var(--color-action-accent)',
        },
        feedback: {
          error: 'var(--color-text-error)',
          success: 'var(--color-text-success)',
          warning: 'var(--color-text-warning)',
          info: 'var(--color-text-info)',
        },
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        button: 'var(--radius-button)',
        card: 'var(--radius-md)',
      },
      boxShadow: {
        ana: '0 4px 16px rgb(47 54 56 / 0.12)',
        'ana-lg': '0 12px 32px rgb(47 54 56 / 0.18)',
      },
      maxWidth: {
        content: '72ch',
      },
    },
  },
  plugins: [],
}
