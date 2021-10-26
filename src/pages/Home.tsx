import React, {FC, useEffect} from 'react';
import Slide from "../components/slide/Slide";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Sneakers from "../components/sneakers/Sneakers";
import {responsive} from "../slider-params/sliderParams";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import axios from "axios";


const Home: FC = () => {
    const {home} = useTypedSelector(state => state)

    const {fetchSneakers} = useActions()

    useEffect(() => {
        fetchSneakers()
    }, [])
    console.log(home.items)


    // const tempalte = {
    //     img: './img/sneakers-img/sn-1.jpg',
    //     price: 12999,
    //     name: 'Мужские Кроссовки Nike Blazer Mid Suede'
    // }
    //
    // axios.post('https://sneakers-78ba9-default-rtdb.firebaseio.com/data.json',tempalte)
    //     .then(data => console.log(data))


    return (
        <div className='main-wrapper'>
            <Carousel responsive={responsive}>
                <Slide/>
                <Slide/>
                <Slide/>
            </Carousel>;

            {
                home.items &&
                home.items.map((item:any) => {
                    console.log(item)
                    return <Sneakers key={item.id} img={item.img} price={item.price} name={item.name}/>
                })
            }
        </div>
    );
};

export default Home;