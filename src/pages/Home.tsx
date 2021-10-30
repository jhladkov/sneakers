import React, {FC, useEffect} from 'react';
import Slide from "../components/slide/Slide";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {responsive} from "../slider-params/sliderParams";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import axios from "axios";
import Section from "../hoc/Section";
import Title from "../components/title/Title";
import SneakersBlock from "../components/sneakers-block/SneakersBlock";


const Home: FC = () => {
    const {home} = useTypedSelector(state => state)

    const {fetchSneakers, addItemToCart,addItemToLike} = useActions()

    useEffect(() => {
        fetchSneakers()
    }, [])


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
                        home.items &&
                        home.items.map((item:any) => {
                            return <SneakersBlock key={item.id} addItemToLike={addItemToLike} addItemToCart={addItemToCart} likeArr={home.cartLikes} cartArr={home.cartItems} id={item.id} img={item.img} price={item.price} name={item.name}/>
                        })
                    }
                </div>
            </Section>


        </div>
    );
};

export default Home;