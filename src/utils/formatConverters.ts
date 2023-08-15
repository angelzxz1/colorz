export const toHex = (num: number) => {
    const hex = num.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
};
//This function will receive a float number and return it with 2 decimals
export const toFixed = (num: number) => {
    if (num === 0) return '0';
    if (num === 1) return '1';
    return num.toFixed(2);
};
