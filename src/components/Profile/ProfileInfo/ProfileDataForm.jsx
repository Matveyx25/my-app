import React from 'react';
import {createField, Input, Textarea} from '../../common/FormsControl/FormsControls'
import { reduxForm } from 'redux-form';
import s from './ProfileInfo.module.css'

const ProfileDataForm = ({ profile , handleSubmit , error}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
        {error && <div className={s.error}>{error}</div>}
        <div>
            <b>Name:</b>{ createField("name", "fullName", [], Input) }
        </div>
        <div className={s.checkbox}>
            <b>Looking for a job:</b> { createField(null, "lookingForAJob", [], Input, {type: "checkbox"}) }
        </div>
        <div>
            <b>My professional skills: </b>{ createField("professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>
        <div>
            <b>About me:</b> { createField("About me", "aboutMe", [], Textarea )}
        </div>
        <div className={s.contacts}>
            <b>Contacts</b> {Object.keys(profile.contacts).map(k => {
                return <div key={k}>
                    {createField(k, "contacts." + k, [] , Input )}
                </div>
            })}
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm
