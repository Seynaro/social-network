import React from 'react';
import Post from "./Post/Post";
import classes from "./MyPosts.module.css"
import {AddNewPostFormRedux} from "./AddNewPostForm/AddNewPostForm";

class MyPosts extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps != this.props || nextState != this.state;
    }

    render() {

        let postsElements = this.props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

        let onAddPost = (values) => {
            this.props.addPost(values.newPostText);
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
    }
}

export default MyPosts;
