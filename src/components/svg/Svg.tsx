import React, {FC} from 'react';

interface SvgProps {
    className: string;
    path: string;
    viewBox: string;
}

const Svg: FC<SvgProps> = ({path, viewBox, className}) => {
    return (
        <svg className={className} viewBox={viewBox}>
            <path
                d={path}></path>
        </svg>
    );
};

export default Svg;