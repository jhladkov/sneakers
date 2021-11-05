import React, {FC} from 'react';
import './Background.scss'

interface BackgroundProps {
    className?: string
    onClick: (value:boolean) => void
}

const Background:FC<BackgroundProps> = ({className,onClick}) => {
    return (
        <div className={`background ${className}`} onClick={() => onClick(false)}/>
    );
};

export default Background;