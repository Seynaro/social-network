import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={classes.header}>
        <img
            src='https://static6.depositphotos.com/1035649/553/v/450/depositphotos_5537406-stock-illustration-sign-friendship-love.jpg'>
        </img>

        <div className={classes.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
};

export default Header;