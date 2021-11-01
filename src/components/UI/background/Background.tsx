import React, {FC} from 'react';
import './Background.scss'
import {useActions} from "../../../hooks/useActions";

interface BackgroundProps {
    className?: string
}

const Background:FC<BackgroundProps> = ({className}) => {
    const {changeStatusMenu} = useActions()
    return (
        <div className={`background ${className}`} onClick={() => changeStatusMenu(false)}/>
    );
};

export default Background;