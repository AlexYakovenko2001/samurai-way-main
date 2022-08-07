import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <>
            <div>
                <img
                    src="https://c4.wallpaperflare.com/wallpaper/826/586/471/nature-space-blue-ultrawide-wallpaper-thumb.jpg"
                    alt=""/>
            </div>
            <div className={s.profileItem}>
                img and description
            </div>
        </>
    )
}

export default ProfileInfo;