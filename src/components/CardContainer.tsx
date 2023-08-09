import ColorCard from './ColorCard';
import { useState, useEffect } from 'react';
const CardContainer = () => {
    const [firstColor, setFirstColor] = useState<string>('#FF00EA');
    const [secondColor, setSecondColor] = useState<string>('#FFC800');
    const [thirdColor, setThirdColor] = useState<string>('#3AFF00');
    const [fourthColor, setFourthColor] = useState<string>('#009CFF');

    return (
        <div className="flex h-2/3 w-4/5 flex-wrap bg-white">
            <div className="flex h-1/2 w-full items-center justify-evenly bg-white">
                <ColorCard colorHex={firstColor} />
                <ColorCard colorHex={secondColor} />
                <ColorCard colorHex={thirdColor} />
                <ColorCard colorHex={fourthColor} />
            </div>
            <div className="flex h-1/2 w-full flex-wrap justify-evenly shadow-[0_-4px_10px_0_rgba(0,0,0,0.45)]">
                <div className="h-1/2 w-full bg-teal-200"></div>
                <div className="h-1/2 w-full bg-teal-500"></div>
            </div>
        </div>
    );
};

export default CardContainer;
