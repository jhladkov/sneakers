export interface Home {
    items: object[] | [];
    error: null | string;
    loading: boolean;
    cartItems: object[] | []
    cartLikes: object[] | []
}

export enum HomeActionType {
    FETCH_SNEAKERS = 'FETCH_SNEAKERS',
    FETCH_SNEAKERS_SUCCESS = 'FETCH_SNEAKERS_SUCCESS',
    FETCH_SNEAKERS_ERROR = 'FETCH_SNEAKERS_ERROR',
    ADD_SNEAKERS_TO_CART = 'ADD_SNEAKERS_TO_CART',
    ADD_SNEAKERS_TO_LIKE = 'ADD_SNEAKERS_TO_LIKE'
}

interface FetchHomeAction {
    type: HomeActionType.FETCH_SNEAKERS;
}
interface FetchUsersSuccessAction {
    type: HomeActionType.FETCH_SNEAKERS_SUCCESS;
    payload: any
}
interface FetchUsersErrorAction {
    type: HomeActionType.FETCH_SNEAKERS_ERROR;
    payload:string
}
interface AddSneakersToCartAction {
    type: HomeActionType.ADD_SNEAKERS_TO_CART;
    payload: object[] | []
}
interface AddSneakersToLikeAction {
    type: HomeActionType.ADD_SNEAKERS_TO_LIKE;
    payload: object[] | []
}


export type HomeAction = FetchHomeAction | FetchUsersSuccessAction | FetchUsersErrorAction | AddSneakersToCartAction | AddSneakersToLikeAction

