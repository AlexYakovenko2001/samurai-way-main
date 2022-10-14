import {ActionsTypes, DialogsPageType, MessageType} from './state';

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: MessageType = {id: 4, message: state.newMessageText}
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessageText
            return state
        default:
            return state
    }
}

export type addMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}
export type updateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>
export const updateNewMessageTextAC = (newMessageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessageText
    } as const
}

export default dialogsReducer