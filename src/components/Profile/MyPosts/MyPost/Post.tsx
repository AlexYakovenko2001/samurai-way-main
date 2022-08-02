import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string
}

const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU" alt=""/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post;