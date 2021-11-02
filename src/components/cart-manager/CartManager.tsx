import React, {FC} from 'react';
import './cart-manager.scss'
import CartManagerItem from "../cart-manager-item/CartManagerItem";
import Title from "../title/Title";
import {useActions} from "../../hooks/useActions";
import Button from "../UI/button/Button";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface CartManagerProps {
    className?: string
    cartItems: object[] | []
}

const CartManager: FC<CartManagerProps> = ({className, cartItems}) => {
    const {home} = useTypedSelector(state => state)

    const {addItemToCart, changeStatusMenu} = useActions()

    return (
        <div className={`cart ${className}`}>
            <Title text='Корзина' className='cart-title title min'/>
            <div className="wrapper">

                <div className="cart-wrapper-item">
                    {
                        cartItems && cartItems.length > 0
                            ? cartItems.map((item: any) => {
                                return <CartManagerItem key={item.id + 0.5} addItemToCart={addItemToCart}
                                                        cartItems={cartItems}
                                                        price={item.price} img={item.img} name={item.name} id={item.id}/>
                            })
                            :
                            <div className='cart-inner'>
                                <div className="cart-inner-img">
                                    <img src="./img/cart-img/box.jpg" alt=""/>
                                </div>
                                <Title text='Корзина пустая' className='cart-inner-title title min '/>
                                <p className='cart-inner-text'>
                                    Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
                                </p>
                                <Button func={() => changeStatusMenu(false)} className='cart-inner-button button'
                                        classSvg='go-back' text='Вернуться назад'/>
                            </div>
                    }
                </div>
                {
                    cartItems && cartItems.length > 0
                        ? <div className='cart-pay'>
                            <div className="cart-pay-info">
                                <div className="cart-pay-info-block">
                                    <div className="cart-pay-info-block-title">Итого:</div>
                                    <div className="cart-pay-info-block-dotted-line"></div>
                                    <div className="cart-pay-info-block-price price">{home.price}руб.</div>
                                </div>
                                <Button className='cart-pay-info-button button' text='Оформить заказ' classSvg='go-buy'/>
                            </div>
                        </div>
                        : null
                }
            </div>
        </div>
    );
};

export default CartManager;