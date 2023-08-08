type Position = {
    x: number;
    y: number;
    floorX: number;
    floorY: number;
};

type circleProps = {
    radius: number;
    centerRadius: number;
    boxSize: number;
};
function radians(degrees: number): number {
    return degrees * (Math.PI / 180);
}
const circle = ({ radius, centerRadius, boxSize }: circleProps): Position[] => {
    const positions: Position[] = [];
    for (let i = 10; i < 90; i = i + 8) {
        const x = centerRadius + Math.round(radius * Math.cos(radians(i)));
        const y = centerRadius + Math.round(radius * Math.sin(radians(i)));
        console.log(centerRadius, radius, x, y);
        const position = {
            x: x * 4,
            y: y * 4,
            floorX: Math.floor(((x * 4) / boxSize) * 100),
            floorY: Math.floor(((y * 4) / boxSize) * 100),
        };
        positions.push(position);
    }
    return positions;
};

export default circle;
