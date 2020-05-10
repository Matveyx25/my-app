import React, { Component } from 'react'
import {Route, withRouter, HashRouter} from "react-router-dom"
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
  
  componentDidMount(){
    this.props.initialazeApp()
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
            <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
            <Route path="/profile/:userId?" render= {withSuspense(ProfileContainer)}/>
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
          </div>
        </div>
    )
  } 
}
  
const mapStateToProps = (state) => ({
  initialazed: state.app.initialazed
})

const MainApp = props => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </HashRouter>
} 

let AppContainer = compose(withRouter , connect(mapStateToProps , {initialazeApp}))(App)

export default MainApp