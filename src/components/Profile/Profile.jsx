import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
                     newPostText={props.profilePage.newPostText}
            />
        </div>
    )
};

export default Profile;