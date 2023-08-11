import ColorCard from './ColorCard';
type firstColorSchemeType = {
    fC050: string;
    fC100: string;
    fC200: string;
    fC300: string;
    fC400: string;
    fC500: string;
    fC600: string;
    fC700: string;
    fC800: string;
    fC900: string;
};

type cardContainerProps = {
    firstColor: string;
    secondColor: string;
    thirdColor: string;
    fourthColor: string;
    firstColorScheme: firstColorSchemeType;
};
const CardContainer = ({
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    firstColorScheme,
}: cardContainerProps) => {
    const {
        fC050,
        fC100,
        fC200,
        fC300,
        fC400,
        fC500,
        fC600,
        fC700,
        fC800,
        fC900,
    } = firstColorScheme;

    return (
        <div className=" flex h-full w-full flex-wrap justify-center">
            <div className="flex h-1/3 w-4/5 items-center justify-evenly ">
                <ColorCard colorHex={firstColor} />
                <ColorCard colorHex={secondColor} />
                <ColorCard colorHex={thirdColor} />
                <ColorCard colorHex={fourthColor} />
            </div>
            <div className="flex h-2/3 w-full flex-wrap justify-evenly shadow-[0_-4px_10px_0_rgba(0,0,0,0.45)]">
                <div className="flex h-1/2 w-4/5 items-center justify-evenly ">
                    <ColorCard colorHex={fC050} />
                    <ColorCard colorHex={fC100} />
                    <ColorCard colorHex={fC200} />
                    <ColorCard colorHex={fC300} />
                    <ColorCard colorHex={fC400} />
                </div>
                <div className="flex h-1/2 w-4/5 items-center justify-evenly ">
                    <ColorCard colorHex={fC500} />
                    <ColorCard colorHex={fC600} />
                    <ColorCard colorHex={fC700} />
                    <ColorCard colorHex={fC800} />
                    <ColorCard colorHex={fC900} />
                </div>
            </div>
        </div>
    );
};

export default CardContainer;
