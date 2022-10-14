import profileReducer, {AddPostActionACType, UpdateNewPostTextACType} from './profileReducer';
import dialogsReducer, {addMessageACType, updateNewMessageTextACType} from './dialogsReducer';

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: StateType
    getStore: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionsTypes) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [{id: 1, message: 'Hi! How are you?', likesCount: 0},
                {id: 2, message: 'It\'s my first post', likesCount: 23}],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Maks'},
                {id: 2, name: 'Sara'},
                {id: 3, name: 'Nastya'},
                {id: 4, name: 'Kostya'},
                {id: 5, name: 'Katya'}],
            messages: [
                {id: 1, message: 'Hello!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'What are you doing?'}],
            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getStore() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}
export type ActionsTypes = AddPostActionACType | UpdateNewPostTextACType | addMessageACType | updateNewMessageTextACType

export default store