import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostType} from '../../App';
import {updateNewPostText} from '../../Redux/state';

type ProfilePropsType = {
    posts: Array<PostType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newPostText: string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
           <MyPosts posts={props.posts}
                    addPost={props.addPost}
                    newPostText={props.newPostText}
                    updateNewPostText={updateNewPostText}/>
        </div>
    );
};

export default Profile;