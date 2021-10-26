import React, {FC} from 'react';

interface ButtonProps {
    className: string;
    text:string;

}

const Button:FC<ButtonProps> = ({className,text}) => {
    return (
        <button className={className}>{text}</button>
    );
};

export default Button;