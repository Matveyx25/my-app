import React from 'react'
import s from "./Dialogs.module.css"
import DialogItem from './DilogItem/DialogItems'
import Message from './Message/Message'
import { addMessageActionCreator, updateNewMessageTextActionCreater } from '../../redux/dialogs-reduser';
import {Field , reduxForm} from 'redux-form'
import { Redirect } from 'react-router-dom';
import {required , maxLengthCreator} from '../../utils/validators/validators'
import { Textarea } from '../common/FormsControl/FormsControls';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messageElements = state.messages.map(m => <Message message={m.message} author={m.author} />);

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }   
    if(!props.isAuth) return <Redirect to={"/login"}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength = maxLengthCreator(100)

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
             name="newMessageBody" 
             placeholder="New message"
             validate={[required , maxLength]}/>
            <button>send</button>
            </form>
}


const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs