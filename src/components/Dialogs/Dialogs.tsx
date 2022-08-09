import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {DialogType, MessageType} from '../../App';
import React from 'react';

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)
    const messagesElements = props.messages.map(m=><Message key={m.id} message={m.message} id={m.id}/>)
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs