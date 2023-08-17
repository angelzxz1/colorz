import ColorCard from 'colorz/components/ColorCard';
import CardContainer from 'colorz/components/CardContainer';
import Controller from 'colorz/components/Controller';
import Square from 'colorz/components/SchemeComps/Square';
import { useState, useEffect } from 'react';
import circle from 'colorz/components/SchemeComps/Circle';
import { HsvToHex } from 'colorz/utils/colorconverters';

const Configurer = () => {
    const [boxSize, setBoxSize] = useState<number>(500);
    const [radius, setRadius] = useState<number>(boxSize / 4);
    const [centerRadius, setCenterRadius] = useState<number>(0);
    const [colorBG, setColorBG] = useState<number>(0);
    const [arrayDots, setArrayDots] = useState<
        { x: number; y: number; color: string }[]
    >([]);
    const circleUpdate = () => {
        const Circle = circle(radius, centerRadius, boxSize);
        const tempArrayColors: string[] = [];
        const tempArrayDots: { x: number; y: number; color: string }[] = [];
        Circle.map((position) => {
            // console.log(position);
            const { x, y, floorX, floorY } = position;
            const color = HsvToHex(
                colorBG,
                floorX < 0 ? 0 : floorX > 100 ? 100 : floorX,
                floorY < 0 ? 0 : floorY > 100 ? 100 : floorY
            );
            tempArrayDots.push({
                x: x,
                y: y,
                color: color,
            });

            // console.log(arrayColors);
        });
        setArrayDots(tempArrayDots.reverse());
    };
    useEffect(() => {
        circleUpdate();
    }, [boxSize, centerRadius, colorBG, radius]);
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <Square {...{ arrayDots, boxSize }} />
            <Controller
                {...{
                    setBoxSize,
                    setRadius,
                    setCenterRadius,
                    boxSize,
                    radius,
                    centerRadius,
                }}
            />
        </div>
    );
};

export default Configurer;
