export interface Home {
    items: object[] | [];
    error: null | string;
    loading: boolean;
    price: number;
    activeMenu: boolean
}

export enum HomeActionType {
    FETCH_SNEAKERS = 'FETCH_SNEAKERS',
    FETCH_SNEAKERS_SUCCESS = 'FETCH_SNEAKERS_SUCCESS',
    FETCH_SNEAKERS_ERROR = 'FETCH_SNEAKERS_ERROR',
    CHANGE_DATA_SNEAKERS = 'CHANGE_DATA_SNEAKERS',
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

interface ChangeDataSneakersAction {
    type: HomeActionType.CHANGE_DATA_SNEAKERS;
    payload: object[] | [],
    price: number
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
    | ChangeDataSneakersAction
    | ChangeStatusMenu
    | AddSneakersToBoughtAction

