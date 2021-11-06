import React, {FC} from 'react';
import './cart-manager.scss'
import CartManagerItem from "../cart-manager-item/CartManagerItem";
import Title from "../title/Title";
import Button from "../UI/button/Button";
import CartInner from "../cartInner/CartInner";

interface CartManagerProps {
    className?: string;
    cartItems: object[] | [];
    successfulPurchase: boolean;
    addItemToBought: (arr:object[] | []) => void;
    addItemToCart: (arr:object[] | [], price?: number) => void;
    completeBuy: (value: boolean) => void;
    home:any;
    setSuccessfulPurchase: (value: boolean) => void;
    changeStatusMenu: (value:boolean) => void
}

const CartManager: FC<CartManagerProps> = ({className,changeStatusMenu,setSuccessfulPurchase,home, cartItems,addItemToCart,addItemToBought,successfulPurchase,completeBuy}) => {

    const changeArrays = () => {
        addItemToBought(home.cartItems)
        addItemToCart([], -home.price)
        setSuccessfulPurchase(true)
    }

    return (
        <div className={`cart ${className}`}>
            <Title text='Корзина' className='cart-title title min'/>
            <div className="wrapper">

                <div className="cart-wrapper-item">
                    {
                          cartItems && cartItems.length > 0
                            ? cartItems.map((item: any) => {
                                return <CartManagerItem key={item.id + Math.random()} addItemToCart={addItemToCart}
                                                        cartItems={cartItems}
                                                        price={item.price} img={item.img} name={item.name} id={item.id}/>
                            })
                            : !successfulPurchase
                                ? <CartInner img='./img/cart-img/box.jpg' changeStatusMenu={changeStatusMenu}
                                       textContent='Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
                                       textTitle='Корзина пустая'
                                />
                              : <CartInner img='./img/cart-img/buy-complete.jpg' changeStatusMenu={completeBuy}
                                           textContent='Ваш заказ #18 скоро будет передан курьерской доставке'
                                           textTitle='Заказ оформлен!'/>
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
                                <Button className='cart-pay-info-button button' onClick={changeArrays} text='Оформить заказ'
                                        classSvg='go-buy'/>
                            </div>
                        </div>
                        : null
                }
            </div>
        </div>
    );
};

export default CartManager;