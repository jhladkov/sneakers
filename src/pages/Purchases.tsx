import React, {FC} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import Section from "../hoc/Section";
import Title from "../components/title/Title";
import SneakersBlock from "../components/sneakers-block/SneakersBlock";
import Svg from "../components/svg/Svg";
import {NavLink, useHistory} from "react-router-dom";
import CartInner from "../components/cartInner/CartInner";

const Purchases: FC = () => {
    const {home} = useTypedSelector(state => state)
    const history = useHistory()

    const goHome = () => {
        history.push('/')
    }

    return (
        <Section className='section purchases'>
            {
                home.boughtItems && home.boughtItems.length > 0
                ? <div className="purchases-inner section-inner">
                        <div className="purchases-svg section-inner-svg add">
                            <NavLink to='/'>
                                <Svg className='add-svg'
                                     path='M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z'
                                     viewBox="0 0 24 24"/>
                            </NavLink>
                        </div>
                        <Title text='Мои покупки' className='purchases-title title'/>
                    </div>
                    :null
            }
            <div className="purchases-wrapper sneakers-inner">
                {
                    home.boughtItems.length > 0
                        ? home.boughtItems.map((item: any) => {
                            return <SneakersBlock key={item.id + Math.random()} arraySneakers={home.items}
                                                  id={item.id} img={item.img}
                                                  price={item.price} name={item.name} disabledLike={true}
                                                  disabledAdd={true}
                            />
                        })
                        : <CartInner img='./img/buy/buy.jpg' goHome={goHome}
                                     textContent='Вы нищеброд? Оформите хотя бы один заказ.'
                                     textTitle='У вас нет заказов'/>
                }
            </div>
        </Section>
    );
};

export default Purchases;