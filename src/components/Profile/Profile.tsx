import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, PostType} from '../../Redux/state';


type ProfilePropsType = {
    posts: Array<PostType>
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
           <MyPosts posts={props.posts}
                    dispatch={props.dispatch}
                    newPostText={props.newPostText}/>
        </div>
    );
};

export default Profile;