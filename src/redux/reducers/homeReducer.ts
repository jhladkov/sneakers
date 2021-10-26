import {Home} from "../../types/home";

const initialState: Home = {
    items: []
}

export const homeReducer = (state = initialState, action:any) : Home => {
    switch (action.type) {
        default:
            return state
    }
}