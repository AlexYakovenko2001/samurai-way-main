import React from 'react';
import s from './MyPosts.module.css'
import Post from './MyPost/Post';

const MyPosts = () => {
    const posts = [
        {id: 1, message: 'Hi! How are you?', likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 23}
    ]
    const postsElement = posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postBlock}>
            <h4>my posts</h4>
            <div>
                <div>
                <textarea></textarea>
                </div>
                <div>
                <button>add post</button>
                </div>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;