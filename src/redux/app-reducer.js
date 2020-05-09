import { getAuthUserData } from './auth-reducer'

const INITIALAZED_SUCCESS = 'INITIALAZED_SUCCESS'

let initialState = {
    initialazed: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALAZED_SUCCESS:
            return {
                ...state,
                initialazed: true,
                }   
        default:
            return state;
    }
}


export const initialazedSuccess = () => ({ type: INITIALAZED_SUCCESS})

export const initialazeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initialazedSuccess());
        })
}

export default appReducer