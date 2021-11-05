import React, {FC} from 'react';
import './button.scss'

interface ButtonProps {
    className: string;
    classSvg?: string
    text: string;
    onClick?: any
}

const Button: FC<ButtonProps> = ({className, text, classSvg,onClick}) => {
    return (
        <button className={className} onClick={onClick}>
            <div>
                {
                    classSvg && classSvg === 'go-back'
                        ? <svg id="icon-arrow-left" viewBox="0 0 24 24">
                            <path d="M12.707 18.293l-5.293-5.293h11.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-11.586l5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-7 7c-0.096 0.096-0.168 0.206-0.217 0.324-0.051 0.122-0.076 0.253-0.076 0.383 0 0.256 0.098 0.512 0.293 0.707l7 7c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
                        </svg>
                        : null
                }
                <span>{text}</span>
                {
                    classSvg && classSvg === 'go-buy'
                        ? <svg id="icon-arrow-right" viewBox="0 0 24 24">
                            <path d="M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                        </svg>
                        : null

                }
            </div>
        </button>
    );
};

export default Button;