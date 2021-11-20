import React, {FC} from 'react';
import Title from "../title/Title";
import Button from "../UI/button/Button";

interface CartInnerProps {
    changeStatusMenu?: (arg: boolean) => void;
    goHome?: () => void
    textContent: string;
    img:string;
    textTitle: string;
}

const CartInner:FC<CartInnerProps> = ({img,textContent,changeStatusMenu,textTitle, goHome}) => {
    return (
        <div className='cart-inner'>
            <div className="cart-inner-img">
                <img src={img} alt=""/>
            </div>
            <Title text={textTitle} className='cart-inner-title title min '/>
            <p className='cart-inner-text'>
                {textContent}
            </p>
            <Button onClick={() => {
                if (changeStatusMenu) {
                    changeStatusMenu(false)
                }
                if (goHome) {
                    goHome()
                }
            }} className='cart-inner-button button'
                    classSvg='go-back' text='Вернуться назад'/>
        </div>
    );
};

export default CartInner;