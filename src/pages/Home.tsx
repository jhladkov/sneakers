import React, {FC, useEffect, memo, useMemo} from 'react';
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

    const {fetchSneakers, changeDataSneakers} = useActions()


    useEffect(() => {
        fetchSneakers()
    }, [])


    return (
        <div className='main-wrapper'>
            <Carousel responsive={responsive}>
                <Slide/>
                <Slide/>
                <Slide/>
            </Carousel>


            <Section className='section sneakers'>
                <Title text='Все кросовки' className='sneakers-title title'/>
                <div className="sneakers-inner">
                    {
                        home.error
                            ? <div>{home.error}</div>
                            : home.items &&
                            home.items.map((item: any,index) => {
                                return <SneakersBlock key={item.id}  changeDataSneakers={changeDataSneakers}
                                                      index={index}
                                                      id={item.id} img={item.img} arraySneakers={home.items}
                                                      price={item.price} name={item.name}/>
                            })
                    }
                </div>
            </Section>


        </div>
    );
};

export default memo(Home);