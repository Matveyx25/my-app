import React from 'react'
import Paginator from '../common/Paginator/Paginator'
import User from './User'

const Users = (props) => {
    return <div>
        <Paginator totalItemsCount={props.totalUsersCount}
            pageSize={props.pageSize} onPageChange={props.onPageChange}
            currentPage={props.currentPage} portionsSize={10}/>
        {props.users.map(u => <User user={u} key={u.id}
            followingInProgress={props.followingInProgress}
            follow={props.follow} unfollow={props.unfollow}
             />)}
    </div>
}

export default Users