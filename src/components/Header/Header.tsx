import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    login: string | null
    logoutTC: () => void
}

const Header: React.FC<PropsType> = (props) => {
    return <header className={classes.header}>
        <img
            src='https://static6.depositphotos.com/1035649/553/v/450/depositphotos_5537406-stock-illustration-sign-friendship-love.jpg'>
        </img>

        <div className={classes.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logoutTC}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
};

export default Header;