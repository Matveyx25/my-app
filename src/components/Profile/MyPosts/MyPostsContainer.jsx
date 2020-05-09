import MyPosts from './MyPosts';
import {addPostActionCreater } from '../../../redux/profile-reducer';
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        newPostState : state.profilePage.newPostState,
        posts : state.profilePage.postsData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreater(newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps , mapDispatchToProps)(MyPosts);

export default MyPostsContainer;