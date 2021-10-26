import {Home, HomeAction, HomeActionType} from "../../types/home";


const initialState: Home = {
    items: [],
    error: null,
    loading: false

}

export const homeReducer = (state = initialState, action:HomeAction ) : Home => {
    switch (action.type) {
        case HomeActionType.FETCH_SNEAKERS:
            return {...state, loading: true}
        case HomeActionType.FETCH_SNEAKERS_SUCCESS:
            // const arr:any = state.items
            // arr.push(action.payload)
            return {...state, loading: false, items:action.payload}
        case HomeActionType.FETCH_SNEAKERS_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}