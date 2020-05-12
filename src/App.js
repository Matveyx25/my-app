import React, { Component } from 'react'
import {Route, withRouter, HashRouter, Switch, Redirect} from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import { initialazeApp } from './redux/app-reducer'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import Preloader from './components/common/preloader/preloader'
import store from './redux/redux-store'
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer' 
import { withSuspense } from './hoc/withSuspense'

const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import ('./components/Profile/ProfileContainer'));


class App extends Component {
  catchAllUnhandledError = (promiseRejectionEvent) => {
    alert(promiseRejectionEvent)
  }
  componentDidMount(){
    this.props.initialazeApp()
    window.addEventListener("unhandledrejection", this.catchAllUnhandledError)
  }
  componentWillUnmount(){
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledError)
  }
  render() {
    if(!this.props.initialazed){
      return <Preloader />
    }
    return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Switch>
            <Route path="/dialogs" 
            render={withSuspense(DialogsContainer)}/>
            <Route path="/profile/:userId?"
             render= {withSuspense(ProfileContainer)}/>
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
            <Route exact path="/" render={() => <Redirect to={"/profile"}/>} />
            <Route path="*" render={() => <div className="error__not-found">404 NOT FOUND</div>} />
            </Switch>
          </div>
        </div>
    )
  } 
}
  
const mapStateToProps = (state) => ({
  initialazed: state.app.initialazed
})

const AppContainer = compose(
  withRouter ,
   connect(mapStateToProps , {initialazeApp}))(App)

const MainApp = props => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </HashRouter>
} 

export default MainApp