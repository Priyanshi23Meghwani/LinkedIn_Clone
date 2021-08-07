import { SET_USER, SHOW_WORK_MODAL } from "../actions/actionType";


const INITIAL_STATE = {
    user: null,
    work: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){

        case SET_USER:
            return{
                ...state,
                user: action.user,
            }
        case SHOW_WORK_MODAL:
            return{
                ...state,
                work: action.opened,
            }

        default:
            return state;
    }
};

export default userReducer;