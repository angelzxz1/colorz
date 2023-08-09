import { HexToHsv, HexToRgb, RgbToHsl } from 'colorz/utils/colorconverters';
import { useRef } from 'react';
import { IconCopy } from '@tabler/icons-react';

export type ColorCardProps = {
    colorHex: string;
};
const ColorCard = ({ colorHex }: ColorCardProps) => {
    const rgb = HexToRgb(colorHex);
    const rgbString = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    const hsv = HexToHsv(colorHex);
    const hsvString = `hsb(${hsv[0]}, ${hsv[1]}, ${hsv[2]})`;
    const hsl = RgbToHsl(rgb[0], rgb[1], rgb[2]);
    const hslString = `hsl(${hsl[0]}, ${hsl[1]}, ${hsl[2]})`;
    const ref = useRef<HTMLSelectElement>(null);
    return (
        <div
            className=" flex
        h-3/4 w-[15%]
        flex-wrap rounded-[0.5rem] border
        border-white bg-white
        p-3
        text-black
        shadow-card
        "
        >
            <div
                className="h-2/3 w-full rounded-[5px]"
                style={{ background: colorHex }}
            ></div>
            <div className="flex h-1/3 w-full flex-wrap items-center justify-end">
                <select
                    className=" w-full rounded-[5px] border  border-black px-2 py-1 text-left text-black"
                    ref={ref}
                >
                    <option value="hex" selected>
                        {colorHex}
                    </option>
                    <option value="rgb">{rgbString}</option>
                    <option value="hsb">{hsvString}</option>
                    <option value="hsl">{hslString}</option>
                </select>
                <button
                    className="rounded-[5px] border border-black
                     px-4 py-1
                    text-center text-black
                    hover:bg-black hover:text-white

                "
                    onClick={(e) => {
                        e.preventDefault();
                        if (!ref.current) return;
                        const curr = ref.current.options.selectedIndex;
                        const text = ref.current.options[curr];
                        if (!text) return;
                        void navigator.clipboard.writeText(text.innerText);
                        alert('Copied to clipboard!');
                    }}
                >
                    <IconCopy />
                </button>
            </div>
        </div>
    );
};

export default ColorCard;
