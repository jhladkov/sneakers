import React, {FC} from 'react';
interface InputProps {
    className: string;
    placeholder:string;
    value?: string;
    onChange?:(arg:any) => void
}

const Input:FC<InputProps> = ({className,placeholder,value,onChange}) => {
    return (
        <input onChange={onChange} value={value || ''} placeholder={placeholder} className={`input ${className || ''}`}/>
    );
};

export default Input;