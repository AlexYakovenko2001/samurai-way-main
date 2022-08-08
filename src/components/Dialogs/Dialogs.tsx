import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.message}</div>
}


type DialogItemPropsType = {
    name: string
    id: number
}
const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={ `${s.dialog} ${s.active}` }>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


const Dialogs = () => {
    const dialogs = [
        {id: 1, name: 'Maks'},
        {id: 2, name: 'Sara'},
        {id: 3, name: 'Nastya'},
        {id: 4, name: 'Kostya'},
        {id: 5, name: 'Katya'}
    ]
const messages = [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What are you doing?'},
]
    const dialogsElements = dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)
    const messagesElements = messages.map(m=><Message key={m.id} message={m.message}/>)
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