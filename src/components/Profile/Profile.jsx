import React from 'react';
import s from "./Profile.module.css";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}
            status={props.status} isOwner={props.isOwner}
            savePhoto={props.savePhoto}
            updateStatus={props.updateStatus}
            saveProfile={props.saveProfile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;