import {Home, HomeAction, HomeActionType} from "../../types/home";


const initialState: Home = {
    items: [],
    error: null,
    loading: false,
    cartItems: [],
    cartLikes: []
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
            return {...state,cartItems:action.payload}
        case HomeActionType.ADD_SNEAKERS_TO_LIKE:
            return {...state, cartLikes: action.payload}
        default:
            return state
    }
}