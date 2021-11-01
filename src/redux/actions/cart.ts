import {HomeActionType} from "../../types/home";

export const changeStatusMenu = (status:boolean) => {
    return{
        type: HomeActionType.CHANGE_STATUS_MENU,
        payload: status
    }

}