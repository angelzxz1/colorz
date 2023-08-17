import { motion, useMotionValue } from 'framer-motion';
import { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { HexToRgb, HsvToHex } from 'colorz/utils/colorconverters';
import { toHex, toFixed } from 'colorz/utils/formatConverters';

type ColorSliderProps = {
    setColor: React.Dispatch<React.SetStateAction<string>>;
};

const ColorSlider = ({ setColor }: ColorSliderProps) => {
    const [xSize, setXSize] = useState<number>(10);
    const x = useMotionValue(0);
    const constraintsRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (constraintsRef.current) {
            const { width } = constraintsRef.current.getBoundingClientRect();
            setXSize(Math.floor(width));
            console.log('asd');
        }
    }, []);
    return (
        <motion.div
            className="colorSelector flex h-16 w-full items-center rounded-full border"
            ref={constraintsRef}
        >
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="100"
                viewBox="0 0 30 100"
                fill="pink"
                dragElastic={false}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                style={{ x }}
                dragConstraints={{ left: 0, right: xSize - 30 }}
                drag="x"
                onDrag={() => {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                    const pos = x.get();
                    const value = Math.floor((pos / (xSize - 30)) * 360);
                    setColor(HsvToHex(value, 100, 100));
                    // console.log(x);
                }}
                dragMomentum={false}
            >
                <motion.path
                    d="M23.1855 0.500015H6.81455C2.8007 0.500015 0.138737 4.66043 1.82077 8.30484L10.0858 26.2124C10.3587 26.8037 10.5 27.4471 10.5 28.0982L10.5 94V95C10.5 96.4164 11.1669 97.7502 12.3 98.6C13.9001 99.8 16.1001 99.8 17.7001 98.6C18.8332 97.7501 19.5 96.4164 19.5 95.0001L19.5001 94.0354L19.5 28.0982C19.5 27.4471 19.6413 26.8037 19.9142 26.2124L28.1792 8.30483C29.8613 4.66042 27.1993 0.500015 23.1855 0.500015Z"
                    stroke="white"
                    fill="white"
                />
            </motion.svg>
        </motion.div>
    );
};

type ColorInformationProps = {
    color: string;
    opacity: number;
};
const ColorInformation = ({ color, opacity }: ColorInformationProps) => {
    const [R, G, B]: [number, number, number] = HexToRgb(color);
    const opacityHex = toHex(opacity);
    const opacityPercentage = opacity / 255;

    return (
        <div className="flex h-full w-full flex-wrap items-center justify-center bg-[#2F3336]">
            <div className="w-2/3">
                <div className="flex w-full justify-between">
                    <div>HEX:</div>
                    <span className="text-[#7E7E7E]">
                        {`${color.toUpperCase()}${opacityHex.toUpperCase()}`}
                    </span>
                </div>
                <div className="flex w-full justify-between">
                    <div>RGBA:</div>
                    <span className="text-[#7E7E7E]">{`(${R}, ${G}, ${B}, ${toFixed(
                        opacityPercentage
                    )})`}</span>
                </div>
                <div className="flex w-full justify-between">
                    <div>Opacity:</div>
                    <span className="text-[#7E7E7E]">
                        {(opacityPercentage * 100).toFixed(2)}%
                    </span>
                </div>
            </div>
        </div>
    );
};
type OpacitySliderProps = {
    opacity: number;
    setOpacity: React.Dispatch<React.SetStateAction<number>>;
    color: string;
};
const OpacitySlider = ({ setOpacity, color }: OpacitySliderProps) => {
    const [xSize, setXSize] = useState<number>(10);
    const x = useMotionValue(0);
    const constraintsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (constraintsRef.current) {
            const { width } = constraintsRef.current.getBoundingClientRect();
            setXSize(Math.floor(width));
        }
    }, []);
    return (
        <motion.div
            className="flex h-16 w-full items-center rounded-full border"
            style={{
                background: `linear-gradient(90deg, ${color} 0%, ${color}00 100%)`,
            }}
            ref={constraintsRef}
        >
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="100"
                viewBox="0 0 30 100"
                fill="pink"
                dragElastic={false}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                style={{ x }}
                dragConstraints={{ left: 0, right: xSize - 30 }}
                drag="x"
                onDrag={() => {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                    const pos = x.get();
                    const value = Math.floor((pos / (xSize - 30)) * 255);
                    setOpacity(255 - value);
                    // console.log(x);
                }}
                dragMomentum={false}
            >
                <motion.path
                    d="M23.1855 0.500015H6.81455C2.8007 0.500015 0.138737 4.66043 1.82077 8.30484L10.0858 26.2124C10.3587 26.8037 10.5 27.4471 10.5 28.0982L10.5 94V95C10.5 96.4164 11.1669 97.7502 12.3 98.6C13.9001 99.8 16.1001 99.8 17.7001 98.6C18.8332 97.7501 19.5 96.4164 19.5 95.0001L19.5001 94.0354L19.5 28.0982C19.5 27.4471 19.6413 26.8037 19.9142 26.2124L28.1792 8.30483C29.8613 4.66042 27.1993 0.500015 23.1855 0.500015Z"
                    stroke="white"
                    fill="white"
                />
            </motion.svg>
        </motion.div>
    );
};
type ControllerProps = {
    setBoxSize: Dispatch<SetStateAction<number>>;
    setRadius: Dispatch<SetStateAction<number>>;
    setCenterRadius: Dispatch<SetStateAction<number>>;
    boxSize: number;
    radius: number;
    centerRadius: number;
};

const Controller = ({
    setBoxSize,
    setRadius,
    setCenterRadius,
    boxSize,
    radius,
    centerRadius,
}: ControllerProps) => {
    const [extraController, setExtraController] = useState({
        h: 20,
        innerH: 100,
        displayBottom: 'none',
    });
    const [color, setColor] = useState<string>(HsvToHex(0, 100, 100));
    const [opacity, setOpacity] = useState<number>(255);
    const [selectedBG, setSelectedBG] = useState<string>('white');

    return (
        <div
            className="absolute bottom-0 flex w-full items-center justify-center gap-1 border-y-4 border-[#52595F] bg-black py-1 "
            style={{
                height: `${extraController.h}vh`,
            }}
        >
            <div
                className="absolute bottom-full right-[2%] mb-1 h-8 w-8 cursor-pointer rounded-t-md bg-[#52595F]"
                onClick={() => {
                    setExtraController((prev) => {
                        return prev.h === 20
                            ? { h: 40, innerH: 50, displayBottom: 'flex' }
                            : { h: 20, innerH: 100, displayBottom: 'none' };
                    });
                }}
            />
            <div className="flex h-full w-[15%] items-center justify-center">
                <ColorInformation {...{ color, opacity }} />
            </div>
            <div className="flex h-full w-[85%] flex-wrap bg-[#2F3336]">
                <div
                    className="flex w-full gap-4 "
                    style={{
                        height: `${extraController.innerH}%`,
                    }}
                >
                    <div className="flex w-[10%] flex-col items-center justify-around">
                        <div
                            className="h-8 w-8 rounded-full bg-black hover:cursor-pointer"
                            onClick={() => {
                                setSelectedBG('black');
                            }}
                        />
                        <div
                            className="h-[75px] w-[75px] rounded-full border"
                            style={{ background: selectedBG }}
                        >
                            <div
                                className="h-full w-full rounded-full "
                                style={{
                                    background: `${color}${toHex(opacity)}`,
                                }}
                            ></div>
                        </div>
                        <div
                            className="h-8 w-8 rounded-full bg-white hover:cursor-pointer"
                            onClick={() => {
                                setSelectedBG('white');
                            }}
                        />
                    </div>
                    <div className="flex w-full flex-col items-center justify-center">
                        <ColorSlider {...{ setColor }} />
                    </div>
                    <div className="flex w-[25%] flex-col items-center justify-center ">
                        <OpacitySlider {...{ opacity, setOpacity, color }} />
                    </div>
                </div>
                <div
                    className="w-full gap-4 bg-red-800"
                    style={{
                        height: `${extraController.innerH}%`,
                        display: extraController.displayBottom,
                    }}
                >
                    {/* <input type='range' min={} max={} value={boxSize} onChange={()=>{setBoxSize}} /> */}
                    <input
                        type="range"
                        min={0}
                        max={250}
                        value={radius}
                        onChange={(e) => {
                            setRadius(parseInt(e.target.value));
                        }}
                    />
                    <input
                        type="range"
                        min={-100}
                        max={100}
                        value={centerRadius}
                        onChange={(e) => {
                            setCenterRadius(parseInt(e.target.value));
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
export default Controller;
