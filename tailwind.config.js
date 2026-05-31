/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                surface: {
                    50: '#ffffff',
                    100: '#f8fafc',
                    200: '#f1f5f9',
                    300: '#e2e8f0',
                    400: '#cbd5e1',
                },
                heading: '#0f172a',
                body: '#475569',
                muted: '#64748b',
                accent: {
                    cyan: '#06b6d4',
                    violet: '#8b5cf6',
                    fuchsia: '#d946ef',
                },
            },
            fontFamily: {
                'grotesk': ['Space Grotesk', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
                'mono': ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'gradient': 'gradient 8s ease infinite',
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 2s infinite',
                'float-slow': 'float 8s ease-in-out 1s infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shimmer': 'shimmer 3s ease-in-out infinite',
                'blob': 'blob 7s infinite',
                'spin-slow': 'spin 12s linear infinite',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(2deg)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
            },
            backgroundSize: {
                '300%': '300%',
            },
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
                'soft-xl': '0 20px 60px -15px rgba(0, 0, 0, 0.1)',
                'colored': '0 10px 40px -10px rgba(6, 182, 212, 0.15)',
                'colored-lg': '0 20px 60px -15px rgba(139, 92, 246, 0.15)',
            },
        },
    },
    plugins: [],
}
