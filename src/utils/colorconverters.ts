export function HexToRgb(hex: string): [number, number, number] {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return [r, g, b];
}

export function HsvToRgb(
    h: number,
    s: number,
    v: number
): [number, number, number] {
    s /= 100;
    v /= 100;
    const k = (n: number) => (n + h / 60) % 6;
    const f = (n: number) =>
        v * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
    const { R, G, B } = {
        R: parseInt((255 * f(5)).toFixed()),
        G: parseInt((255 * f(3)).toFixed()),
        B: parseInt((255 * f(1)).toFixed()),
    };
    return [R, G, B];
}

export const RgbToHEX = (r: number, g: number, b: number) => {
    const R = r < 16 ? `0${r.toString(16)}` : r.toString(16);
    const G = g < 16 ? `0${g.toString(16)}` : g.toString(16);
    const B = b < 16 ? `0${b.toString(16)}` : b.toString(16);
    return `#${R}${G}${B}`;
};

export const HsvToHex = (h: number, s: number, v: number) => {
    const [r, g, b] = HsvToRgb(h, s, v);
    const hex = RgbToHEX(r, g, b);
    return hex;
};

export function RgbToHsv(
    r: number,
    g: number,
    b: number
): [number, number, number] {
    r /= 255;
    g /= 255;
    b /= 255;
    const v = Math.max(r, g, b),
        n = v - Math.min(r, g, b);
    const h =
        n === 0
            ? 0
            : n && v === r
            ? (g - b) / n
            : v === g
            ? 2 + (b - r) / n
            : 4 + (r - g) / n;
    const { H, S, B } = {
        H: Math.floor(60 * (h < 0 ? h + 6 : h)),
        S: Math.floor(v && (n / v) * 100),
        B: Math.floor(v * 100),
    };
    return [H, S, B];
}

export const HexToHsv = (hex: string) => {
    const [r, g, b] = HexToRgb(hex);
    return RgbToHsv(r, g, b);
};

export function generateColorScheme(color: string) {
    const [h] = HexToHsv(color);
    const colors: string[] = [];

    const minSaturation = 10;
    const maxSaturation = 90;
    const minValue = 10;
    const maxValue = 90;
    colors.push(HsvToHex(h, minSaturation, maxValue));

    let prevS = 10;
    let prevV = 90;
    for (let i = 0; i < 8; i++) {
        prevS += 9;
        prevV -= 9;
        colors.push(HsvToHex(h, prevS, prevV));
    }
    colors.push(HsvToHex(h, maxSaturation, minValue));
    return colors;
}

//This function will recieve a rgb color and return a HSL color
export function RgbToHsl(
    r: number,
    g: number,
    b: number
): [number, number, number] {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    let h: number, s: number;
    const l = (max + min) / 2;
    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                h = 0;
        }
        h /= 6;
    }
    return [Math.floor(h * 360), Math.floor(s * 100), Math.floor(l * 100)];
}
