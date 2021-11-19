import React, {FC} from 'react';
import './cart-manager.scss'
import CartManagerItem from "../cart-manager-item/CartManagerItem";
import Title from "../title/Title";
import Button from "../UI/button/Button";
import CartInner from "../cartInner/CartInner";

interface CartManagerProps {
    className?: string;
    successfulPurchase: boolean;
    addItemToBought: (arr: object[] | []) => void;
    changeDataSneakers: (arr: object[] | [], price?: number) => void;
    completeBuy: (value: boolean) => void;
    home: any;
    arraySneakers: object[] | [];
    setSuccessfulPurchase: (value: boolean) => void;
    changeStatusMenu: (value: boolean) => void;
}

const CartManager: FC<CartManagerProps> = ({
                                               className,
                                               changeStatusMenu,
                                               setSuccessfulPurchase,
                                               home,
                                               arraySneakers,
                                               changeDataSneakers,
                                               addItemToBought,
                                               successfulPurchase,
                                               completeBuy,
                                           }) => {

    const doBuy = () => {
        const arr: any = home.boughtItems
        let price = 0

        arraySneakers.map((item: any) => {
            if (item.selected === true) {
                arr.push(item)
                price += item.price
            }
            item.selected = false
        })
        changeDataSneakers(arraySneakers, -price)
        setSuccessfulPurchase(true)
        addItemToBought(arr)
    }


    return (
        <div className={`cart ${className}`}>
            <div className="cart-header">
                <Title text='Корзина' className='cart-title title min'/>
                <div className='cart-header-close' onClick={() => changeStatusMenu(false)}>&times;</div>
            </div>
            <div className="wrapper">

                <div className="cart-wrapper-item">
                    {
                        arraySneakers && arraySneakers.filter((item: any) => item.selected).length > 0
                            ? arraySneakers.filter((item: any) => item.selected).map((item: any) => {
                                return <CartManagerItem key={item.id + Math.random()} id={item.id}
                                                        changeDataSneakers={changeDataSneakers}
                                                        price={item.price} img={item.img} name={item.name}
                                                        arraySneakers={arraySneakers}/>
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
                    arraySneakers && arraySneakers.filter((item: any) => item.selected).length > 0
                        ? <div className='cart-pay'>
                            <div className="cart-pay-info">
                                <div className="cart-pay-info-block">
                                    <div className="cart-pay-info-block-title">Итого:</div>
                                    <div className="cart-pay-info-block-dotted-line"></div>
                                    <div className="cart-pay-info-block-price price">{home.price}руб.</div>
                                </div>
                                <Button className='cart-pay-info-button button' onClick={doBuy} text='Оформить заказ'
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