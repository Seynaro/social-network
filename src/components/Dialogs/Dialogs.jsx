import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";

const Dialogs = ({dialogsPage, sendMessage}) => {
    let state = dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name}/>);
    let messageElements = state.messages.map(m => <Message message={m.message}/>);

    let addNewMessage = (values) => {
        sendMessage(values.newMessageBody)
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