import React, {FC} from 'react';
import CartManager from "../cart-manager/CartManager";
import Background from "../UI/background/Background";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Cart:FC = () => {
    const {home} = useTypedSelector(state => state)
    return (
        <div>
            <CartManager className={home.activeMenu ? 'active' : ''} cartItems={home.cartItems}/>
            <Background className={home.activeMenu ? 'open' : 'close'}/>
        </div>
    );
};

export default Cart;