import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/user.jpg";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return <div>
        <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.large || userPhoto} className={classes.mainPhoto} />
            {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            <ProfileStatus status={props.status}
                           updateStatusTC={props.updateStatusTC}/>
        </div>
    </div>
};

export default ProfileInfo;