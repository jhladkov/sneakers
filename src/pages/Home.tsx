import React, {FC, useEffect, useState} from 'react';
import Slide from "../components/slide/Slide";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {responsive} from "../slider-params/sliderParams";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import Section from "../hoc/Section";
import Title from "../components/title/Title";
import SneakersBlock from "../components/sneakers-block/SneakersBlock";


const Home: FC = () => {
    const {home} = useTypedSelector(state => state)
    // const [number, setNumber] = useState(0)

    const {fetchSneakers, addItemToCart, addItemToLike} = useActions()

    useEffect(() => {
        fetchSneakers()
    }, [])

    // useEffect(() => {
    //     setNumber(Math.random())
    //     console.log('change Home cartItems')
    // }, [home.cartItems])


    return (
        <div className='main-wrapper'>
            <Carousel responsive={responsive}>
                <Slide/>
                <Slide/>
                <Slide/>
            </Carousel>;


            <Section className='section sneakers'>
                <Title text='Все кросовки' className='sneakers-title title'/>
                <div className="sneakers-inner">
                    {
                        home.error
                            ? <div>{home.error}</div>
                            : home.items &&
                            home.items.map((item: any) => {
                                return <SneakersBlock key={item.id}  addItemToLike={addItemToLike}
                                                      addItemToCart={addItemToCart} likeArr={home.cartLikes}
                                                      cartArr={home.cartItems} id={item.id} img={item.img}
                                                      price={item.price} name={item.name}/>
                            })
                    }
                </div>
            </Section>


        </div>
    );
};

export default Home;