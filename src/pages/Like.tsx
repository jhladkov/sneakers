import React, {FC} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import Section from "../hoc/Section";
import {NavLink, useHistory} from "react-router-dom";
import Svg from "../components/svg/Svg";
import Title from "../components/title/Title";
import SneakersBlock from "../components/sneakers-block/SneakersBlock";
import {useActions} from "../hooks/useActions";
import CartInner from "../components/cartInner/CartInner";

const Like: FC = () => {
    const {home} = useTypedSelector(state => state)
    const {changeDataSneakers} = useActions()

    const history = useHistory()

    const goHome = () => {
        history.push('/')
    }

    return (
        <Section className='section like'>
            {
                home.items && home.items.filter((item: any) => item.liked).length > 0
                    ? <div className="like-inner section-inner">
                        <div className="like-svg section-inner-svg add">
                            <NavLink to='/'>
                                <Svg className='add-svg'
                                     path='M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z'
                                     viewBox="0 0 24 24"/>
                            </NavLink>
                        </div>
                        <Title text='Мои закладки' className='like-title title'/>
                    </div>
                    : null
            }

            <div className="like-wrapper sneakers-inner">
                {
                    home.items && home.items.filter((item: any) => item.liked).length > 0
                        ? home.items.filter((item: any) => item.liked).map((item: any) => {
                            return <SneakersBlock key={item.id + item.id} arraySneakers={home.items}
                                                  changeDataSneakers={changeDataSneakers}
                                                  id={item.id} img={item.img}
                                                  price={item.price} name={item.name}
                            />
                        })
                        : <CartInner img='./img/like/like.jpg' goHome={goHome}
                                     textContent='Вы ничего не добавляли в закладки'
                                     textTitle='Закладок нет :('/>
                }
            </div>
        </Section>
    );
};

export default Like;