import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hi', likequantity: 23 },
                { id: 2, message: 'Hello', likequantity: 23 },
                { id: 3, message: 'you', likequantity: 23 },
                { id: 3, message: 'Yo', likequantity: 23 },
                { id: 5, message: 'Good bay', likequantity: 23 },
                { id: 6, message: 'Lose', likequantity: 23 }
            ],
            newPostState: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Alex' },
                { id: 2, name: 'Matvey' },
                { id: 3, name: 'Victor' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Artem' },
                { id: 6, name: 'Pasha' }
            ],
            messages: [
                { id: 1, message: 'Hi', author: 'me' },
                { id: 2, message: 'Hello', author: 'other' },
                { id: 3, message: 'How are you', author: 'me' },
                { id: 3, message: 'Good', author: 'other' },
                { id: 5, message: 'And you', author: 'other' },
                { id: 6, message: 'Good', author: 'me' }
            ],
            newMessageState: ''
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() { },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    
        this._callSubscriber(this._state);
    }
}

export default store;
