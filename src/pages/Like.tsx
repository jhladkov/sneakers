import React, {FC} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import Section from "../hoc/Section";
import {NavLink} from "react-router-dom";
import Svg from "../components/svg/Svg";
import Title from "../components/title/Title";
import SneakersBlock from "../components/sneakers-block/SneakersBlock";
import {useActions} from "../hooks/useActions";

const Like:FC = () => {
    const {home} = useTypedSelector(state => state)
    const {addItemToCart, addItemToLike} = useActions()

    return (
        <Section className='section like'>
            <div className="like-inner section-inner">
                <div className="like-svg section-inner-svg add">
                    <NavLink to='/'>
                        <Svg className='add-svg' path='M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z' viewBox="0 0 24 24"/>
                    </NavLink>
                </div>
                <Title text='Мои закладки' className='like-title title'/>
            </div>

            <div className="like-wrapper sneakers-inner">
                {
                    home.cartLikes.length > 0
                        ? home.cartLikes.map((item:any) => {
                            return <SneakersBlock key={item.id + Math.random()}  addItemToLike={addItemToLike}
                                                  addItemToCart={addItemToCart} likeArr={home.cartLikes}
                                                  cartArr={home.cartItems} id={item.id} img={item.img}
                                                  price={item.price} name={item.name}
                            />
                        })
                        : <h1>Sorry</h1>
                }
            </div>
        </Section>
    );
};

export default Like;