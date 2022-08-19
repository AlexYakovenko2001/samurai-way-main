import {rerenderEntireTree} from '../render';

const state = {
    profilePage: {
        posts: [{id: 1, message: 'Hi! How are you?', likesCount: 0},
            {id: 2, message: 'It\'s my first post', likesCount: 23}]
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

export const addPost = (textForNewPost: string) => {
    const newPost = {id: 3, message: textForNewPost, likesCount: 0}
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state