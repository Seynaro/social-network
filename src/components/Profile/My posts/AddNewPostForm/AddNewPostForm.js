import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../Common/Forms/Forms";
import {maxLengthCreator, requiredField} from "../../../../utils/validators/validator";
import React from "react";

let AddNewPostForm = (props) => {
    const maxLength10 = maxLengthCreator(10);
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea}
                       validate={[requiredField, maxLength10]}
                       placeholder={"Post message"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )};

export const AddNewPostFormRedux = reduxForm({
    form: "profileAddNewPostForm"})
(AddNewPostForm);