import React from 'react';
import s from './MyPosts.module.css'
import Post from './MyPost/Post';
import {PostType} from '../../../App';

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newPostText: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
            props.addPost()
    }
    const onPostChange = () => {
        const text = newPostElement.current?.value
        if (text) {
            props.updateNewPostText(text)
        }
    }
    return (
        <div className={s.postBlock}>
            <h4>my posts</h4>
            <div>
                <div>
                <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} />
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