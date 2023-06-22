import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';




const Dialogs = (props) => {
    let messagesData = props.dialog.messagesData;
    let dialogsData = props.dialog.dialogsData;

    
    let messageElement = messagesData.map(message => <Message key={message.id} message={message.name} id={message.id}  ></Message>)
    let dialogsElement = dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}></DialogItem>)

    return (<div>
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}

            </div>
        </div>
    </div>);
}


export default Dialogs;