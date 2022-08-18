import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import Post from './MyPost/Post';
import {PostType} from '../../../App';

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (textForNewPost: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = useRef<HTMLTextAreaElement>(null)
    const addPost = () => {
        const text = newPostElement.current?.value
        if (text) {
            props.addPost(text)
        }
    }
    return (
        <div className={s.postBlock}>
            <h4>my posts</h4>
            <div>
                <div>
                <textarea ref={newPostElement}></textarea>
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