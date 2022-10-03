import {rerenderEntireTree} from '../render';

const state = {
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
}

export const addPost = () => {
    const newPost = {id: 3, message: state.profilePage.newPostText, likesCount: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}
export const updateNewPostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText
    rerenderEntireTree(state)
}

export default state