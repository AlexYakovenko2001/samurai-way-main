
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
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type dialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>

}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: dialogsPageType
}

export type StoreType = {
    _state: StateType
    getStore: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionsTypes) => void
}
type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostText = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}
export type ActionsTypes = AddPostActionType | UpdateNewPostText


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
            {id: 3, message: 'What are you doing?'}]
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
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {id: 3, message: this._state.profilePage.newPostText, likesCount: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber(this._state)
        }
    }
}

export default store