import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile , getStatus , updateStatus ,savePhoto} from '../../redux/profile-reducer'
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.loginedUserId
            if(!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
       this.refreshProfile()
    }

    componentDidUpdate(prevProps , prevState , snapshot) {
        if(this.props.match.params.userId != prevProps.match.params.userId){
        this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props} 
            savePhoto={this.props.savePhoto}
            isOwner={!this.props.match.params.userId}
            profile={this.props.profile} status={this.props.status} 
            updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loginedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { getUserProfile , savePhoto , getStatus , updateStatus}),
    withRouter,
     withAuthRedirect
)(ProfileContainer)
