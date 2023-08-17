import { useEffect, useState } from 'react';
import circle from './Circle';
import { HsvToHex } from 'colorz/utils/colorconverters';
import Dot from './Dot';

type DopProps = { x: number; y: number; color: string };
type SquareProps = {
    boxSize: number;
    arrayDots: DopProps[];
};
const Square = ({ boxSize, arrayDots }: SquareProps) => {
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

export default Square;
