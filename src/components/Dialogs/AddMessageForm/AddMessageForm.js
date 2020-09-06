import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/Forms/Forms";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validator";
import React from "react";

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[requiredField, maxLength100]}
                       name="newMessageBody"
                       placeholder="Enter your message"/>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </form>)
};

export const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm);