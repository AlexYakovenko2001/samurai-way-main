import s from '../Dialogs.module.css';
import React from 'react';

type MessagePropsType = {
    id: number
    message: string
}
const Message: React.FC<MessagePropsType> = (props) => {

    return (
        <>
            <div className={s.message}>{props.message}</div>
        </>
    )
}

export default Message