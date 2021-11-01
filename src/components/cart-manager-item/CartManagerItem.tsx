import React, {FC} from 'react';
import './cart-manager-item.scss'

interface CartManagerItemProps {
    img:string;
    price:number;
    name: string;
    id: number;
    cartItems: object[] | [];
    addItemToCart: (array:object[] | [], price: number) => void
}

const CartManagerItem:FC<CartManagerItemProps> = ({img,price,name,id,cartItems,addItemToCart}) => {

    const removeItem = () => {
        const filterArr = cartItems.filter((item: any) => item.id !== id)
        addItemToCart(filterArr, -price)
    }

    return (
        <div className='cart-wrapper item'>
            <div className="item-img">
                <img src={img} alt=""/>
            </div>
            <div className="item-info">
                <div className="item-info-name">{name}</div>
                <div className="item-info-price price">{price} руб.</div>
            </div>
            <div className="item-info-icon add" onClick={removeItem}>
                <svg className='add-svg' viewBox="0 0 24 24">
                    <path
                        d="M5 13h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
                </svg>
            </div>
        </div>
    );
};

export default CartManagerItem;