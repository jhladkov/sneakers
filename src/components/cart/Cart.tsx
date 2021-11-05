import React, {FC, useState} from 'react';
import CartManager from "../cart-manager/CartManager";
import Background from "../UI/background/Background";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const Cart: FC = () => {
    const {home} = useTypedSelector(state => state)

    const {addItemToCart, changeStatusMenu, addItemToBought} = useActions();

    const [successfulPurchase, setSuccessfulPurchase] = useState(false)

    const completeBuy = (boolean: boolean) => {
        changeStatusMenu(boolean)
        setTimeout(() => {
            setSuccessfulPurchase(false)
        }, 500)
    }

    return (
        <div>
            <CartManager className={home.activeMenu ? 'active' : ''} addItemToCart={addItemToCart}
                         addItemToBought={addItemToBought} cartItems={home.cartItems}
                         successfulPurchase={successfulPurchase} completeBuy={completeBuy} setSuccessfulPurchase={setSuccessfulPurchase}
                         home={home} changeStatusMenu={changeStatusMenu}


            />
            <Background className={home.activeMenu ? 'open' : 'close'} onClick={completeBuy}/>
        </div>
    );
};

export default Cart;