import {Home, HomeAction, HomeActionType} from "../../types/home";


const initialState: Home = {
    items: [],
    error: null,
    price: 0,
    loading: false,
    activeMenu: false
}

export const homeReducer = (state = initialState, action: HomeAction): Home => {
    switch (action.type) {
        case HomeActionType.FETCH_SNEAKERS:
            return {...state, loading: true}
        case HomeActionType.FETCH_SNEAKERS_SUCCESS:
            return {...state, loading: false, items: action.payload}
        case HomeActionType.FETCH_SNEAKERS_ERROR:
            return {...state, error: action.payload}
        case HomeActionType.CHANGE_DATA_SNEAKERS:
            let sum = state.price + action.price
            return {...state, items: action.payload, price: sum}
        case HomeActionType.CHANGE_STATUS_MENU:
            return {...state, activeMenu: action.payload}
        default:
            return state
    }
}