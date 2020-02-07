import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
            <div className={classes.item}>
                <img src="https://avatars.mds.yandex.net/get-pdb/1767376/0de9f39a-c664-4469-847a-df2c22b1cc16/s1200" alt=""/>
                post 1
                <div>
                <span>like</span>
                </div>
            </div>
    )};
export default Post;