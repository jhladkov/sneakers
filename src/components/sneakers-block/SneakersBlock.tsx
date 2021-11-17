import React, {FC, useEffect, useState, memo} from 'react';
import Svg from "../svg/Svg";
import {useTypedSelector} from "../../hooks/useTypedSelector";

export interface SneakersBlockProps {
    img: string;
    name: string;
    price: number;
    arraySneakers: any;
    selected?: boolean;
    index: number;
    liked?: boolean;
    id: number;
    changeDataSneakers?: any
    disabledAdd?: boolean;
    disabledLike?: boolean;
}

const SneakersBlock: FC<SneakersBlockProps> = ({
                                                   img,
                                                   price,
                                                   name,
                                                   id,
                                                   index,
                                                   changeDataSneakers,
                                                   disabledAdd,
                                                   disabledLike,
                                                   arraySneakers,
                                               }) => {
    const [addedBuy, setAddBuy] = useState<boolean>(disabledLike && disabledAdd ? false : arraySneakers[index].selected)
    const [addedLike, setAddLike] = useState<boolean>(disabledLike && disabledAdd ? false : arraySneakers[index].liked)

    const dependent = arraySneakers.filter((item: any) => item.selected)

    useEffect(() => {
        if (!disabledAdd) {
            if (addedBuy !== arraySneakers[index].selected) {
                console.log('arraySneakers[index].selected',arraySneakers[index].selected)
                setAddBuy(arraySneakers[index].selected)
            }
        }
    }, [dependent])

    const addItemToCartBuy = () => {
        if (!disabledAdd) {
            let valuePrice = price
            if (addedBuy) {
                valuePrice = -price
            }

            arraySneakers[index].selected = !addedBuy
            setAddBuy(!addedBuy)
            changeDataSneakers(arraySneakers, valuePrice)
        }
    }
    const addItemToCartLike = () => {
        if (!disabledLike) {
            arraySneakers[index].liked = !addedLike
            setAddLike(!addedLike)
            changeDataSneakers(arraySneakers, 0)
        }
    }

    return (
        <div className="sneakers-block">
            <div className="sneakers-block-wrapper">
                <div className={`sneakers-block-wrapper-like ${addedLike ? 'added-like' : null} add`}
                     onClick={addItemToCartLike}>
                    {
                        !disabledLike && addedLike
                            ? <Svg className='add-like-svg add-svg'
                                   path='M10 3.22l-0.61-0.6c-0.983-0.931-2.314-1.504-3.779-1.504-3.038 0-5.5 2.462-5.5 5.5 0 1.462 0.571 2.791 1.501 3.776l-0.002-0.003 8.39 8.39 8.39-8.4c0.928-0.983 1.499-2.312 1.499-3.774 0-3.038-2.462-5.5-5.5-5.5-1.465 0-2.796 0.573-3.782 1.506l0.003-0.002-0.61 0.61z'
                                   viewBox='0 0 20 20'/>
                            : <Svg className='add-like-svg add-svg'
                                   path='M20.133 5.317c0.88 0.881 1.319 2.031 1.319 3.184s-0.44 2.303-1.319 3.182l-8.133 8.133-8.133-8.133c-0.879-0.879-1.318-2.029-1.318-3.183s0.439-2.304 1.318-3.183 2.029-1.318 3.183-1.318 2.304 0.439 3.183 1.318l1.060 1.060c0.391 0.391 1.024 0.391 1.414 0l1.062-1.062c0.879-0.879 2.029-1.318 3.182-1.317s2.303 0.44 3.182 1.319zM21.547 3.903c-1.269-1.269-2.934-1.904-4.596-1.905s-3.327 0.634-4.597 1.903l-0.354 0.355-0.353-0.353c-1.269-1.269-2.935-1.904-4.597-1.904s-3.328 0.635-4.597 1.904-1.904 2.935-1.904 4.597 0.635 3.328 1.904 4.597l8.84 8.84c0.391 0.391 1.024 0.391 1.414 0l8.84-8.84c1.269-1.269 1.904-2.934 1.905-4.596s-0.634-3.327-1.905-4.598z'
                                   viewBox='0 0 24 24'/>
                    }
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
                        <div className="price-block-price price">{price || 0} руб.</div>
                    </div>
                    <div className={`sneakers-block-inner-add ${addedBuy ? 'added' : ''} add`}
                         onClick={addItemToCartBuy}>
                        {
                            !disabledAdd && addedBuy
                                ? <Svg className='add-svg'
                                       path='M19.293 5.293l-10.293 10.293-4.293-4.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0l11-11c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z'
                                       viewBox="0 0 24 24"/>

                                : <Svg className='add-svg'
                                       path='M5 13h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z'
                                       viewBox="0 0 24 24"/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};


// export default memo(SneakersBlock, (lastProps, nextProps) => {
//     console.log('nextProps', nextProps)
//     nextProps.arraySneakers.forEach((item:any) => {
//         if (item['id'] === nextProps.index + 1) {
//             console.log(nextProps.index, item['id'], 'changed')
//             return false
//         }
//     })
//     return true
// })

export default SneakersBlock

