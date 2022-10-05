import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import React, {createRef} from 'react';
import {DialogType, MessageType} from '../../Redux/state';

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let newMessageElement = createRef<HTMLTextAreaElement>()
    const addMessageHandler = () => {
        const message = newMessageElement.current?.value
        if (message) {
            alert(message)
            if (newMessageElement.current)
            newMessageElement.current.value = ''
        }
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