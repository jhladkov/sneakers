import React, {FC} from 'react';
import Section from "../../hoc/Section";
import './sneakers.scss'
import SneakersBlock, {SneakersBlockProps} from "../sneakers-block/SneakersBlock";
import Title from "../title/Title";

interface SneakersProps extends SneakersBlockProps {

}

const Sneakers: FC<SneakersProps> = ({img,price,name}) => {

    return (
        <Section className='section sneakers'>
            <div className="sneakers-inner">
                <Title text='Все кросовки'/>
                <SneakersBlock img={img} name={name} price={price}/>
            </div>
        </Section>
    );
};

export default Sneakers;