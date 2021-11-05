import {Home, HomeAction, HomeActionType} from "../../types/home";


const initialState: Home = {
    items: [],
    error: null,
    price: 0,
    loading: false,
    cartItems: [],
    boughtItems: [],
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
            let sum = state.price + action.price
            return {...state,cartItems:action.payload,price: sum}
        case HomeActionType.ADD_SNEAKERS_TO_LIKE:
            return {...state, cartLikes: action.payload}
        case HomeActionType.CHANGE_STATUS_MENU:
            return {...state, activeMenu: action.payload}
        case HomeActionType.ADD_SNEAKERS_TO_BOUGHT:
            return {...state, boughtItems: state.boughtItems.concat(action.payload)}
        default:
            return state
    }
}