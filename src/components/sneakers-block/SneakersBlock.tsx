import React, {FC} from 'react';
import './sneakersBlock.scss'

export interface SneakersBlockProps {
    img: string;
    name: string;
    price:number;
}

const SneakersBlock:FC<SneakersBlockProps> = ({img,price,name}) => {
    return (
        <div className="sneakers-block">
            <div className="sneakers-block-wrapper">
                <div className="sneakers-block-wrapper-like add-like">
                    <svg className='add-like-svg' viewBox="0 0 24 24">
                        <path d="M20.133 5.317c0.88 0.881 1.319 2.031 1.319 3.184s-0.44 2.303-1.319 3.182l-8.133 8.133-8.133-8.133c-0.879-0.879-1.318-2.029-1.318-3.183s0.439-2.304 1.318-3.183 2.029-1.318 3.183-1.318 2.304 0.439 3.183 1.318l1.060 1.060c0.391 0.391 1.024 0.391 1.414 0l1.062-1.062c0.879-0.879 2.029-1.318 3.182-1.317s2.303 0.44 3.182 1.319zM21.547 3.903c-1.269-1.269-2.934-1.904-4.596-1.905s-3.327 0.634-4.597 1.903l-0.354 0.355-0.353-0.353c-1.269-1.269-2.935-1.904-4.597-1.904s-3.328 0.635-4.597 1.904-1.904 2.935-1.904 4.597 0.635 3.328 1.904 4.597l8.84 8.84c0.391 0.391 1.024 0.391 1.414 0l8.84-8.84c1.269-1.269 1.904-2.934 1.905-4.596s-0.634-3.327-1.905-4.598z"></path>
                    </svg>
                </div>
                <div className="sneakers-block-wrapper-img">
                    <img src={img} alt=""/>
                </div>
                <div className="sneakers-block-wrapper-name">{name || 'sneakers'}</div>
                <div className="sneakers-block-inner">
                    <div className="sneakers-block-inner-price price-block">
                        <span className='price-block-title'>
                            ЦЕНА:
                        </span>
                        <div className="price-block-price">{price || 0} руб.</div>
                    </div>
                    <div className="sneakers-block-inner-add add">
                        <svg className='add-svg' viewBox="0 0 24 24">
                            <path d="M5 13h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SneakersBlock;