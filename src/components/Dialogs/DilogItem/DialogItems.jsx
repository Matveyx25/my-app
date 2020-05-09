import React from 'react';
import s from "./../Dialogs.module.css";
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink activeClassName={s.active} to={"/dialogs/" + props.id}>
                <div className={s.logo}></div>
                {props.name}
            </NavLink>
        </div>
    );
}

export default DialogItem;