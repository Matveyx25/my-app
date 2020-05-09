import React from 'react'
import s from "./ProfileInfo.module.css"
import Preloader from '../../common/preloader/preloader'
import HeaderBg from '../../../assets/img/Header.png'
import avatar from '../../../assets/img/1521018917.png'
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader className={s.preloader}/>
    }
    let largeAvatar = props.profile.photos.large
    if(largeAvatar === null){
        largeAvatar = avatar
    }
    return (
        <div>
        <div>
            <img className={s.headerBg} src={HeaderBg} />
        </div>
        <div className={s.descriptionBlock}>
            <img src={largeAvatar}/>
            <div className={s.name}>
                {props.profile.fullName}
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
        </div>
    );
}

export default ProfileInfo;