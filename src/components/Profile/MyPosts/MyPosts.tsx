import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './MyPost/Post';
import {ActionsTypes, addPostAC, PostType, updateNewPostTextAC} from '../../../Redux/state';

type MyPostsPropsType = {
    posts: Array<PostType>
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.dispatch(addPostAC())
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(e.currentTarget.value))
    }
    return (
        <div className={s.postBlock}>
            <h4>my posts</h4>
            <div>
                <div>
                <textarea onChange={onPostChange} value={props.newPostText} />
                </div>
                <div>
                <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;