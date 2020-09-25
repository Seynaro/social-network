import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";

let Users = ({totalUserCount, pageSize, currentPage, followingInProgress, followTC, onPageChanged, unfollowTC, users}) => {

    let pagesCount = Math.ceil(totalUserCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };


    return <div>
        <div>
            {pages.map(p => {
                return <span className={currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })};
        </div>
        {
            users.map(u => <div>
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
                                 onClick={() => { unfollowTC(u.id) }
                                 }>Unfollow</button>

                       : <button disabled={followingInProgress
                           .some(id => id === u.id)}
                                 onClick={() => { followTC(u.id) }
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
    </div>
};

export default Users;