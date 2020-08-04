import React from 'react'
import cl from './Sidebar.module.css'
import { NavLink } from 'react-router-dom';
import avatar from '../../image/avatar.png'
import { useLocation } from "react-router-dom";
import ShadowMode from '../common/ShadowMode/ShadowMode';

const Sidebar = (props) => {
    let location = useLocation();

    return (
        <div className={cl.sidebar}>
            <div className={cl.sidebar__avatar}>
                <img src={avatar} alt="" className={cl.avatar} />
            </div>
            <ul className={cl.sidebar__menu}>
                <li><NavLink className={cl.sidebar__link} to={"/"} >Register form</NavLink></li>
                <li><NavLink className={cl.sidebar__link} to={"/comments"} >Comments</NavLink></li>
            </ul>
            { location.pathname === '/comments' ? <ShadowMode /> : null }

        </div>
    )
}



export default Sidebar