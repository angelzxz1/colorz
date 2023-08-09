import { type Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                card: '4px 4px 12px 0 rgba(0, 0, 0, 0.45)',
            },
        },
    },
    plugins: [],
} satisfies Config;
