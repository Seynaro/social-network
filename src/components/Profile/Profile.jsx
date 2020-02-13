import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./My posts/MyPosts";

const Profile = () => {
    return <div>
        <div className={classes.background}>
            <img src='https://kogdakotika.net/media/post_images/title_page_m_ChtRYfI.jpg' alt=""></img>
        </div>
        <MyPosts/>
    </div>
}

export default Profile;