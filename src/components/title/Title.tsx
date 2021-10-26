import React, {FC} from 'react';

interface TitleProps {
    text: string
}

const Title:FC<TitleProps> = ({text}) => {
    return (
        <h2>{text}</h2>
    );
};

export default Title;