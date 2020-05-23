import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return <div>
        {/*<div className={classes.background}>
            <img src='https://kogdakotika.net/media/post_images/title_page_m_ChtRYfI.jpg' alt=""></img>
        </div>*/}
        <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.large} />
            <ProfileStatus status={props.status}
                           updateStatusTC={props.updateStatusTC}/>
        </div>
    </div>
};

export default ProfileInfo;