import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/img/1521018917.png'
import { NavLink } from 'react-router-dom'

const User = ({user, followingInProgress , follow , unfollow}) => {
    return <div className={s.wrap}>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img className={s.avatar} src={user.photos.small != null ? user.photos.small : userPhoto} alt="" />
                </NavLink>
            </div>
            <div>
                {user.followed ?
                    <button disabled={
                       followingInProgress.some(id => id == user.id)} className={s.unfollowBtn} onClick={() => { unfollow(user.id) }} >unfollow</button> :
                    <button disabled={followingInProgress.some(id => id == user.id)} className={s.followBtn} onClick={() => { follow(user.id) }}>follow</button>}
            </div>
        </span>
        <span>
            <div className={s.name}>{user.name}</div>
            <div>{user.status}</div>
        </span>
    </div>
}

export default User