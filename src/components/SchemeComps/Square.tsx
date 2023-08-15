import { useEffect, useState } from 'react';
import circle from './Circle';
import { HsvToHex } from 'colorz/utils/colorconverters';
import Dot from './Dot';

const Square = () => {
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
    }, [boxSize, centerRadius, colorBG]);
    return (
        <div
            className="relative mt-6 bg-teal-300"
            style={{
                width: `${boxSize}px`,
                height: `${boxSize}px`,
            }}
        >
            {arrayDots.map((item, i) => {
                return (
                    <Dot
                        key={i}
                        x={
                            item.x < 0
                                ? '0px'
                                : item.x > boxSize - 10
                                ? `${boxSize - 10}px`
                                : `${item.x}px`
                        }
                        y={
                            item.y < 0
                                ? '0'
                                : item.y > boxSize - 10
                                ? `${boxSize - 10}px`
                                : `${item.y}px`
                        }
                        colorBG={item.color}
                    />
                );
            })}
        </div>
    );
};
