/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern': "url('/src/assets/hero.png')",
                'violet-gradient':
                    'linear-gradient(-90deg, #804dee 0%, rgba(60, 51, 80, 0) 100%)',
                transparent: 'transparent',
            },
            backgroundColor: {
                primary: 'rgb(5 8 22 / var(--tw-bg-opacity))',
                tertiary:
                    '--tw-bg-opacity: 1; background-color: rgb(21 16 48 / var(--tw-bg-opacity));',
            },
            textColor: {
                secondary: 'rgb(170 166 195 / var(--tw-text-opacity))',
            },
            keyframes: {
                bounceY: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(30px)' },
                },
            },
            animation: {
                bounceY: 'bounceY 1.5s infinite',
            },
        },
    },
    plugins: [],
};
