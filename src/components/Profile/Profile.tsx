import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://c4.wallpaperflare.com/wallpaper/826/586/471/nature-space-blue-ultrawide-wallpaper-thumb.jpg"
                    alt=""/>
            </div>
            <div>
                img and description
            </div>
           <MyPosts/>
        </div>
    );
};

export default Profile;