export interface Home {
    items: object[] | [];
    error: null | string;
    loading: boolean
}

export enum HomeActionType {
    FETCH_SNEAKERS = 'FETCH_SNEAKERS',
    FETCH_SNEAKERS_SUCCESS = 'FETCH_SNEAKERS_SUCCESS',
    FETCH_SNEAKERS_ERROR = 'FETCH_SNEAKERS_ERROR',
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


export type HomeAction = FetchHomeAction | FetchUsersSuccessAction | FetchUsersErrorAction

