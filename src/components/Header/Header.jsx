import React from 'react';
import s from "./Header.module.css";
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://www.freepnglogos.com/uploads/eagles-png-logo/eagle-sports-png-logos--0.png" />
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login} - <span onClick={props.logout}>Log out</span></div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;