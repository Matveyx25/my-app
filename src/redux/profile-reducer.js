import { usersAPI, profileAPI } from "../api/api"
import { stopSubmit } from "redux-form"

const ADD_POST = 'lightgram/profile/ADD-POST'
const SET_USER_PROFILE = 'lightgram/profile/SET-USER-PROFILE'
const SET_STATUS = 'lightgram/profile/SET-STATUS'
const SAVE_PHOTO_SUCCESS = 'lightgram/profile/SAVE_PHOTO_SUCCESS'

let initialState = {
    postsData: [
        { id: 1, message: 'Hi', likequantity: 23 },
        { id: 2, message: 'Hello', likequantity: 23 },
        { id: 3, message: 'you', likequantity: 23 },
        { id: 3, message: 'Yo', likequantity: 23 },
        { id: 5, message: 'Good bay', likequantity: 23 },
        { id: 6, message: 'Lose', likequantity: 23 }
    ],
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 8,
                message: action.newPostText,
                likequantity: 0
            }
            let stateCopy = {...state}
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.unshift(newPost)
            return stateCopy
        }
        case SET_USER_PROFILE: 
            return {...state, profile: action.profile}
        case SAVE_PHOTO_SUCCESS:
            debugger
            return {...state, profile: {...state.profile , photo: action.photo}}
        case SET_STATUS: 
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPostActionCreater = (newPostText) => ({type: ADD_POST , newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
                dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
        if(response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
}
export const saveProfile = (profile) => async (dispatch , getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
        if(response.data.resultCode === 0) {
           dispatch(getUserProfile(userId))
        }else{
            dispatch(stopSubmit("edit-profile" , { _error: response.data.messages[0]}))
            return Promise.reject(response.data.messages[0])
        }
}

export default profileReducer