import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";

const Profile = ({profile, status, updateStatusTC}) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status}
                         updateStatusTC={updateStatusTC}/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;