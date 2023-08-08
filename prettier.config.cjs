/** @type {import("prettier").Config} */
const config = {
    plugins: [require.resolve('prettier-plugin-tailwindcss')],
    singleQuote: true,
    tabWidth: 4,
    useTabs: false,
};

module.exports = config;
