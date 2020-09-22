import React from 'react';
import Post from "./Post/Post";
import classes from "./MyPosts.module.css"
import {AddNewPostFormRedux} from "./AddNewPostForm/AddNewPostForm";

const MyPosts = React.memo(props => {

    /*shouldComponentUpdate(nextProps, nextState) {
        return nextProps != this.props || nextState != this.state;
    }*/

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts;
