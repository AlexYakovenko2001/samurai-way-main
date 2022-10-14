import {ActionsTypes, PostType, ProfilePageType} from './state';

const profileReducer = (state: ProfilePageType, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {id: 3, message: state.newPostText, likesCount: 0}
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newPostText
            return state
        default:
            return state
    }
}

export type AddPostActionACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (newPostText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newPostText
    } as const
}

export default profileReducer