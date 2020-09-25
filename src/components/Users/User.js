import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";

let User = ({user, followingInProgress, followTC, unfollowTC}) => {
    return (
        <div>
            <span>
               <div>
                   <NavLink to={'/profile/' + u.id}>
                 <img src={u.photos.small != null ? u.photos.small : userPhoto}
                      className={styles.userPhoto}/>
               </NavLink>
               </div>
               <div>
                   {u.followed
                       ? <button disabled={followingInProgress
                           .some(id => id === u.id)}
                                 onClick={() => {
                                     unfollowTC(u.id)
                                 }
                                 }>Unfollow</button>

                       : <button disabled={followingInProgress
                           .some(id => id === u.id)}
                                 onClick={() => {
                                     followTC(u.id)
                                 }
                                 }>Follow</button>}
               </div>
            </span>
            <span>

               <span>
                 <div>{u.name}</div>
                 <div>{u.status}</div>
               </span>

               <span>
                 <div>{"u.location.country"}</div>
                 <div>{"u.location.city"}</div>
               </span>

            </span>
        </div>)
}

export default User;