import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/user.jpg";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = ({profile, savePhoto, status, updateStatusTC, isOwner, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData)
    };

    return (
        <div className={classes.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} className={classes.mainPhoto}/>

            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

            {editMode
                ? <ProfileDataFormReduxForm profile={profile} onSubmit={onSubmit}/>
                : <ProfileData profile={profile} isOwner={isOwner}
                               goToEditMode={() => {
                                   setEditMode(true)
                               }}/>}

            <ProfileStatus status={status}
                           updateStatusTC={updateStatusTC}/>
        </div>
    )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;