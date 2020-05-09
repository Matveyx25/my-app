import React from 'react'
import s from "./MyPosts.module.css"
import Post from './post/Post'
import {Field , reduxForm} from 'redux-form'
import {required , maxLengthCreator} from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControl/FormsControls'


let AddNewPostForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="new message" component={Textarea} name="newPostText" validate={[required, maxLength10]} />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

const MyPosts = React.memo(props => {

    let postsElements = props.posts.map(p => <Post
         message = {p.message} 
         likequantity = {p.likequantity}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
              {postsElements}
              </div>
        </div>
    );
})

const maxLength10 = maxLengthCreator(30)

export default MyPosts;