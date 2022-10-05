
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
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
    subscribe: (observer: (state: StateType) => void) => void
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
            {id: 3, message: 'What are you doing?'}]
    }
},
    getStore() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },
    addPost() {
        const newPost: PostType = {id: 3, message: this._state.profilePage.newPostText, likesCount: 0}
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newPostText) {
        this._state.profilePage.newPostText = newPostText
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store