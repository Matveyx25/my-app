import { combineReducers , createStore, applyMiddleware, compose  } from "redux"
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reduser"
import usersReducer from "./users-reduser"
import sidebarReducer from "./sidebar-reducer"
import authReducer from "./auth-reducer"
import thunkMiddlewere from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import appReducer from "./app-reducer"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddlewere)
  ))

window.store = store

export default store