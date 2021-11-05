export interface Home {
    items: object[] | [];
    error: null | string;
    loading: boolean;
    price: number;
    cartItems: object[] | [];
    cartLikes: object[] | [];
    boughtItems: object[] | any[]
    activeMenu: boolean
}

export enum HomeActionType {
    FETCH_SNEAKERS = 'FETCH_SNEAKERS',
    FETCH_SNEAKERS_SUCCESS = 'FETCH_SNEAKERS_SUCCESS',
    FETCH_SNEAKERS_ERROR = 'FETCH_SNEAKERS_ERROR',
    ADD_SNEAKERS_TO_CART = 'ADD_SNEAKERS_TO_CART',
    ADD_SNEAKERS_TO_LIKE = 'ADD_SNEAKERS_TO_LIKE',
    ADD_SNEAKERS_TO_BOUGHT = 'ADD_SNEAKERS_TO_BOUGHT',
    CHANGE_STATUS_MENU = 'CHANGE_STATUS_MENU'
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
    payload: string
}

interface AddSneakersToCartAction {
    type: HomeActionType.ADD_SNEAKERS_TO_CART;
    payload: object[] | [],
    price: number
}

interface AddSneakersToLikeAction {
    type: HomeActionType.ADD_SNEAKERS_TO_LIKE;
    payload: object[] | []
}

interface AddSneakersToBoughtAction {
    type: HomeActionType.ADD_SNEAKERS_TO_BOUGHT,
    payload: object[] | []
}

interface ChangeStatusMenu {
    type: HomeActionType.CHANGE_STATUS_MENU;
    payload: boolean
}


export type HomeAction =
    FetchHomeAction
    | FetchUsersSuccessAction
    | FetchUsersErrorAction
    | AddSneakersToCartAction
    | AddSneakersToLikeAction
    | ChangeStatusMenu
    | AddSneakersToBoughtAction

