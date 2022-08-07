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
    const dialogDate = [
        {id: 1, name: 'Maks'},
        {id: 2, name: 'Sara'},
        {id: 3, name: 'Nastya'},
        {id: 4, name: 'Kostya'},
        {id: 5, name: 'Katya'}
    ]
const messageDate = [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What are you doing?'},
]
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItem}>
                    <DialogItem name={dialogDate[0].name} id={dialogDate[0].id} />
                    <DialogItem name={dialogDate[1].name} id={dialogDate[1].id} />
                    <DialogItem name={dialogDate[2].name} id={dialogDate[2].id} />
                    <DialogItem name={dialogDate[3].name} id={dialogDate[3].id} />
                    <DialogItem name={dialogDate[4].name} id={dialogDate[4].id} />
                </div>
                <div className={s.messages}>
                    <Message message={messageDate[0].message}/>
                    <Message message={messageDate[1].message}/>
                    <Message message={messageDate[2].message}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs