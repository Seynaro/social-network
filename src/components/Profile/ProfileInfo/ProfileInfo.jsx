import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/user.jpg";


const ProfileInfo = ({profile, status, updateStatusTC}) => {
    if(!profile) {
        return <Preloader/>
    }
    return <div>
        <div className={classes.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} className={classes.mainPhoto} />
            <ProfileStatus status={status}
                           updateStatusTC={updateStatusTC}/>
        </div>
    </div>
};

export default ProfileInfo;