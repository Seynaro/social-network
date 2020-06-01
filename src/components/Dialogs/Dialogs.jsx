import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/Forms/Forms";
import {maxLengthCreator, requiredField} from "../../utils/validators/validator";
import {AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name}/>);
    let messageElements = state.messages.map(m => <Message message={m.message}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    };



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
};



export default Dialogs;