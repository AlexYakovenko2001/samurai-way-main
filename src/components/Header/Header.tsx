import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfdz0J8A8XwgI8FzbPPnevcVvUHdOb2Pg7g&usqp=CAU"
                alt=""/>
        </header>
    );
};

export default Header;