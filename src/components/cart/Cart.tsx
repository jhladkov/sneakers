import React, {FC, useState, memo} from 'react';
import CartManager from "../cart-manager/CartManager";
import Background from "../UI/background/Background";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const Cart: FC = () => {
    const {home} = useTypedSelector(state => state)

    const {changeStatusMenu, changeDataSneakers, addItemToBought} = useActions();

    const [successfulPurchase, setSuccessfulPurchase] = useState(false)

    const completeBuy = (boolean: boolean) => {
        changeStatusMenu(boolean)
        setTimeout(() => {
            setSuccessfulPurchase(false)
        }, 500)
    }

    return (
        <div>
            <CartManager className={home.activeMenu ? 'active' : ''} changeDataSneakers={changeDataSneakers}
                         successfulPurchase={successfulPurchase} completeBuy={completeBuy}
                         setSuccessfulPurchase={setSuccessfulPurchase}
                         home={home} changeStatusMenu={changeStatusMenu} arraySneakers={home.items}
                         addItemToBought={addItemToBought}


            />
            <Background className={home.activeMenu ? 'open' : 'close'} onClick={completeBuy}/>
        </div>
    );
};

export default memo(Cart);