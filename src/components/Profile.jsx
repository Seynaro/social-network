import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return <div className={classes.profile}>
        <div className={classes.background}>
            <img src='https://kogdakotika.net/media/post_images/title_page_m_ChtRYfI.jpg'></img>
        </div>
        {/*<div className="ava">
                    <img src='https://k1news.ru/upload/iblock/189/18921e4b26b7a15bda1aaa7e69b8a2b3.jpg'></img>
                </div>*/}
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={classes.posts}>
            <div className={classes.item}>post 1</div>
            <div className={classes.item}>post 2</div>
            </div>
        </div>
    </div>
}

export default Profile;