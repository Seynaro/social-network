import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = ({profile, status, updateStatusTC}) => {
    if(!profile) {
        return <Preloader/>
    }
    return <div>
        <div className={classes.descriptionBlock}>
            <img src={profile.photos.large} />
            <ProfileStatus status={status}
                           updateStatusTC={updateStatusTC}/>
        </div>
    </div>
};

export default ProfileInfo;