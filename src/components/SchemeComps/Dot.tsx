interface DotProps {
    x: string;
    y: string;
    colorBG: string;
}

const Dot = ({ x, y, colorBG }: DotProps) => {
    return (
        <div
            className="border-black] absolute h-[10px] w-[10px] rounded-full border"
            style={{ left: x, bottom: y, backgroundColor: colorBG }}
        ></div>
    );
};

export default Dot;
