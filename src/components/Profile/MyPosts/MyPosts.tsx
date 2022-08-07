import React from 'react';
import s from './MyPosts.module.css'
import Post from './MyPost/Post';

const MyPosts = () => {
    const postDate = [
        {id: 1, message: 'Hi! How are you?', likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 23}
    ]

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
                <Post message={postDate[0].message} likesCount={postDate[0].likesCount}/>
                <Post message={postDate[1].message} likesCount={postDate[1].likesCount}/>
            </div>
        </div>
    );
};

export default MyPosts;