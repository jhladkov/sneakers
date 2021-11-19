import React, {FC, useEffect, memo, useState} from 'react';
import Slide from "../components/slide/Slide";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {responsive} from "../slider-params/sliderParams";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import Section from "../hoc/Section";
import Title from "../components/title/Title";
import SneakersBlock from "../components/sneakers-block/SneakersBlock";
import Input from "../components/UI/input/Input";


const Home: FC = () => {
    const {home} = useTypedSelector(state => state)
    const [inputValue, setInputValue] = useState<string>('')
    const [filterSneakers,setFilterSneakers] = useState<object[] | []>([])

    const {fetchSneakers, changeDataSneakers} = useActions()


    useEffect(() => {
        if (home.items.length === 0) {
            fetchSneakers()
        }
    }, [])



    const changeInputValue = (value: string) => {
        setInputValue(value)
        findSneakers(value)
    }

    const findSneakers = (value: string) => {
        const filterArrSneakers = home.items.filter((item: any) => {
            const sneakerText = item.name.toLowerCase().split('').filter((item:any) => item !== ' ').join('')
            const inputText = value.trim().toLowerCase().split('').filter((item:any) => item !== ' ').join('')

            if (inputText && sneakerText.includes(inputText)) {
                return true
            }
            return false
        })
        setFilterSneakers(filterArrSneakers)
        console.log('filterArrSneakers',filterArrSneakers)
    }


    return (
        <div className='main-wrapper'>
            <Carousel responsive={responsive}>
                <Slide/>
                <Slide/>
                <Slide/>
            </Carousel>


            <Section className='section sneakers'>
                <div className="sneakers-header">
                    <Title text='Все кросовки' className='sneakers-title title'/>
                    <Input onChange={event => changeInputValue(event.target.value)} value={inputValue}
                           className='sneakers-header-find' placeholder='Поиск...'/>
                </div>
                <div className="sneakers-inner">
                    {
                        home.error
                            ? <div>{home.error}</div>
                            : home.items && filterSneakers.length === 0 && inputValue.length === 0 &&
                            home.items.map((item: any) => {
                                return <SneakersBlock key={item.id} changeDataSneakers={changeDataSneakers}
                                                      id={item.id} img={item.img} arraySneakers={home.items}
                                                      price={item.price} name={item.name}/>
                            })
                    }

                    {
                        inputValue.length && filterSneakers.length > 0
                            ? filterSneakers.map((item: any) => {
                                return <SneakersBlock key={item.id} changeDataSneakers={changeDataSneakers}
                                                      id={item.id} img={item.img} arraySneakers={home.items}
                                                      price={item.price} name={item.name}/>
                            })
                            : filterSneakers.length === 0 && inputValue
                                ? <h2>sorry but we can not to find any sneakers</h2>
                                : null
                    }
                </div>
            </Section>


        </div>
    );
};

export default memo(Home);