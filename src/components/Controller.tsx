import { useState } from 'react';
import { HsvToHex } from 'colorz/utils/colorconverters';

const ColorSlider = () => {
    const [color, setColor] = useState<number>(0);

    return (
        <>
            <div
                style={{ background: '#ff00ea' }}
                className="relative flex h-[75px] w-full items-center rounded-full"
            >
                <div className="h-[125%] w-3 rounded-full bg-white"></div>
            </div>
            <p>Color</p>
        </>
    );
};
const Controller = () => {
    return (
        <div className="absolute bottom-0 flex w-full items-center justify-center gap-1 border-y-4 border-[#52595F] bg-black py-1">
            <div className="w-[15%]">
                <div className="flex flex-wrap items-center justify-center bg-[#2F3336] p-8">
                    <div className="w-full">
                        HEX: <span className="text-[#7E7E7E]">#FF00EA</span>
                    </div>
                    <div className="w-full">
                        R: <span className="text-[#7E7E7E]"> 255</span>
                    </div>
                    <div className="w-full">
                        G: <span className="text-[#7E7E7E]">0</span>
                    </div>
                    <div className="w-full">
                        B: <span className="text-[#7E7E7E]">234</span>
                    </div>
                    <div className="w-full">
                        T: <span className="text-[#7E7E7E]">100</span>
                    </div>
                </div>
            </div>
            <div className="flex h-full w-[85%] gap-4 bg-[#2F3336]">
                <div className="flex w-fit flex-col items-center justify-center">
                    <div
                        style={{ background: '#ff00ea' }}
                        className="h-[75px] w-[75px] rounded-full"
                    ></div>
                    <p>Selected</p>
                </div>
                <div className="flex w-full flex-col items-center justify-center">
                    <ColorSlider />
                </div>
            </div>
        </div>
    );
};
export default Controller;
