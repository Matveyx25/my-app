import React from 'react';
import s from "./Post.module.css";
import avatar from "../../../../assets/img/1521018917.png"

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={avatar} />
            <h3>{props.message}</h3>
            <span className={s.likes}><img src="https://c7.uihere.com/icons/402/773/196/like-136720fdf0630770c8e860dc4d819847.png"/>{props.likequantity}</span>
        </div>
    );
}

export default Post;