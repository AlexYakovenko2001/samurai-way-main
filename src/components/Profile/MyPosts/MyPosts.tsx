import React from 'react';
import s from './MyPosts.module.css'
import Post from './MyPost/Post';

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div>
                <Post message={'Hi! How are you?'}/>
                <Post message={'It\'s my first post'}/>
            </div>
        </div>
    );
};

export default MyPosts;