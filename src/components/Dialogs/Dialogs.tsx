import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import React, {ChangeEvent} from 'react';
import {ActionsTypes, addMessageAC, DialogType, MessageType, updateNewMessageTextAC} from '../../Redux/state';

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {


    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }
    const addMessageHandler = () => {
        props.dispatch(addMessageAC())
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
                    <div>
                        <div>
                            <textarea onChange={onChangeHandler} value={props.newMessageText} placeholder={'Enter your message'}></textarea>
                        </div>
                        <div>
                            <button onClick={addMessageHandler}>Enter</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dialogs