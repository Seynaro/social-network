import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return <div>
        <div className={classes.background}>
            <img src='https://kogdakotika.net/media/post_images/title_page_m_ChtRYfI.jpg' alt=""></img>
        </div>
        <div className={classes.descriptionBlock}>ava + description</div>
    </div>
}

export default ProfileInfo;