import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import {compose} from "redux"
import Preloader from '../common/preloader/preloader.js'
import { follow, unfollow, setCurrentPage, toggleIsFetching, toggleFollowingProgress, requestUsers } from '../../redux/users-reduser'
import { getUsers , getPageSize , getTotalUsersCount , getCurrentPage , getFetching , getFollowinginProgress} from '../../redux/users-selectors'
import { Component } from 'react'


class UsersAPIComponent extends Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader />
                : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetching(state),
        followingInProgress: getFollowinginProgress(state)
    }
}

const UsersContainer = connect(mapStateToProps, { follow , 
    unfollow , setCurrentPage , toggleIsFetching ,
    toggleFollowingProgress , requestUsers })(UsersAPIComponent)

export default UsersContainer