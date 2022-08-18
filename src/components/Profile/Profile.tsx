import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostType} from '../../App';

type ProfilePropsType = {
    posts: Array<PostType>
    addPost: (textForNewPost: string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
           <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;