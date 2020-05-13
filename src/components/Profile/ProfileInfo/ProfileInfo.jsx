import React, { useState } from 'react'
import s from "./ProfileInfo.module.css"
import Preloader from '../../common/preloader/preloader'
import HeaderBg from '../../../assets/img/Header.png'
import avatar from '../../../assets/img/1521018917.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import pen from '../../../assets/img/draw.png'
import ProfileDataForm from './ProfileDataForm'

const ProfileInfo = ({profile , savePhoto , status , updateStatus , isOwner , saveProfile}) => {
    let [editMode , setEditMode] = useState(false)
    
    if (!profile) {
        return <Preloader className={s.preloader} />
    }

    const onSubmit = (formData) => {
            saveProfile(formData).then(() =>
             {setEditMode(false)})
        }

    const onMainPhotoSelect = (e) => {
        if(e.target.files.length){
        savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div>
                <img className={s.headerBg} src={HeaderBg} />
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.imgBlock}>
                <img src={profile.photos.large || avatar} />
                {isOwner && <><input className={s.changeBtn} id={"changeBtn"} type={"file"} onChange={onMainPhotoSelect}/><label htmlFor={"changeBtn"} className={s.changeLabel}><img src={pen}/></label></>}
                </div>
                
                <div className={s.description}>
                
                {editMode ? 
                <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> : 
                <ProfileData toEditMode={() => {setEditMode(true)}} onMainPhotoSelect={onMainPhotoSelect} isOwner={isOwner} profile={profile}/>}
                 <ProfileStatusWithHooks status={status}
                 updateStatus={updateStatus} />
                 </div>
            </div>
        </div>
    );
}

const ProfileData = ({profile , toEditMode , isOwner}) => {
    return <div>
    {isOwner && <div><button onClick={toEditMode}>edit</button></div>}
        <div className={s.name}>
                    {profile.fullName}
        </div>
        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills: </b>{profile.lookingForAJobDescription}
            </div>}
        <div>
            <b>About me:</b> {profile.aboutMe}
        </div>
        <div className={s.contacts}>
            <b>Contacts</b> {Object.keys(profile.contacts).map(k => {
                return <Contact contactTitle={k} value={profile.contacts[k]} />
            })}
        </div>
    </div>
}

const Contact = ({ contactTitle, value }) => {
    return (
        <div>{!value || <div><b>{contactTitle}:</b>{value}</div>}</div>
    )
}

export default ProfileInfo;
