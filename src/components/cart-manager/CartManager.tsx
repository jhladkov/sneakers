import React, {FC} from 'react';
import './cart-manager.scss'
import CartManagerItem from "../cart-manager-item/CartManagerItem";
import Title from "../title/Title";
import {useActions} from "../../hooks/useActions";

interface CartManagerProps {
    className?: string
    cartItems: object[] | []
}

const CartManager: FC<CartManagerProps> = ({className, cartItems}) => {
    const {addItemToCart} = useActions()
    return (
        <div className={`cart ${className}`}>
            <Title text='Корзина' className='cart-title title'/>
            {
                cartItems.length > 0
                    ? cartItems.map((item: any) => {
                        return <CartManagerItem key={item.id + 0.5} addItemToCart={addItemToCart} cartItems={cartItems} price={item.price} img={item.img} name={item.name} id={item.id}/>
                    })
                    : <div>Вы ничего не добавили!</div>
            }

        </div>
    );
};

export default CartManager;