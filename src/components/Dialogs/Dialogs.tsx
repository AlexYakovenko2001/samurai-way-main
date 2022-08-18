import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {DialogType, MessageType} from '../../App';
import React, {useRef} from 'react';

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const newMessageElement = useRef<HTMLTextAreaElement>(null)
    const addMessageHandler = () => {
        const message = newMessageElement.current?.value
        alert(message)
    }

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
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={addMessageHandler}>Enter</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs