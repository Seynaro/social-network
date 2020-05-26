import React from 'react';
import Post from "./Post/Post";
import classes from "./MyPosts.module.css"
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

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
};
export default MyPosts;

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component="textarea"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )};

const AddNewPostFormRedux = reduxForm({
    form: "profileAddNewPostForm"})
(AddNewPostForm);