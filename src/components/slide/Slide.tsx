import React, {FC} from 'react';
import Button from "../UI/button/Button";
import './slide.scss'
import Section from "../../hoc/Section";

const Slide: FC = () => {
    return (
        <Section className="section slider-product">
            <div className="slider-product-inner">
                <div className="slider-product-info">
                    <div className="slider-product-info-logo">
                        <img src="./img/slider-img/elem-2.png" alt=""/>
                    </div>
                    <div className="slider-product-info-content">
                        <h3 className='slider-product-info-content-title'>
                            <span>Stan Smith</span>
                            Forever!
                        </h3>
                        <Button className='slider-product-info-content-button button' text='Купить'/>
                    </div>
                </div>
                <div className="slider-product-photo">
                    <img src="./img/slider-img/elem-1.png" alt=""/>
                </div>
            </div>
        </Section>
    );
};

export default Slide;