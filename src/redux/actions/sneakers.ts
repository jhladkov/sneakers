import {Dispatch} from "redux";
import axios from "axios";
import {HomeAction, HomeActionType} from "../../types/home";


export const fetchSneakers = () => {
    return async (dispatch: Dispatch<HomeAction>) => {
        try {
            dispatch({type: HomeActionType.FETCH_SNEAKERS})
            const response = await axios.get('https://sneakers-78ba9-default-rtdb.firebaseio.com/data.json')
            dispatch({type: HomeActionType.FETCH_SNEAKERS_SUCCESS, payload: response.data})
        }catch (err){
            dispatch({
                type: HomeActionType.FETCH_SNEAKERS_ERROR,
                payload: 'Произошла ошибка при загрузке кросовок',
            })
        }
    }
}

export const addItemToCart = (arr:object[] | []) => {
    return{
        type:HomeActionType.ADD_SNEAKERS_TO_CART,
        payload:arr
    }
}

export const addItemToLike = (arr:object[] | []) => {
    return{
        type:HomeActionType.ADD_SNEAKERS_TO_LIKE,
        payload:arr
    }
}