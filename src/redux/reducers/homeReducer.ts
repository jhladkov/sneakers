import {Home, HomeAction, HomeActionType} from "../../types/home";


const initialState: Home = {
    items: [],
    error: null,
    price: 0,
    loading: false,
    cartItems: [],
    cartLikes: [],
    activeMenu: false
}

export const homeReducer = (state = initialState, action:HomeAction ) : Home => {
    switch (action.type) {
        case HomeActionType.FETCH_SNEAKERS:
            return {...state, loading: true}
        case HomeActionType.FETCH_SNEAKERS_SUCCESS:
            return {...state, loading: false, items:action.payload}
        case HomeActionType.FETCH_SNEAKERS_ERROR:
            return {...state, error: action.payload}
        case HomeActionType.ADD_SNEAKERS_TO_CART:
            console.log('Reducer change',action.payload)
            // if (action.payload.length === 0) {
            //     console.log('l arr')
            //     action.payload.push({'sdfdsf': 'sdfdsf'})
            // }
            let sum = state.price + action.price
            return {...state,cartItems:action.payload,price: sum}
        case HomeActionType.ADD_SNEAKERS_TO_LIKE:
            return {...state, cartLikes: action.payload}
        case HomeActionType.CHANGE_STATUS_MENU:
            return {...state, activeMenu: action.payload}
        default:
            return state
    }
}