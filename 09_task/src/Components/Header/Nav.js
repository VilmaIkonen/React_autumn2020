import React from 'react';

const Nav = () => {
    return (
        <nav> {/* Don't do navigation like that, use Router instead */}
            <ul>
                <li> <a href=""> Home</a></li>
                <li> <a href=""> Blog</a></li>
                <li> <a href=""> New Post</a></li>
            </ul>
        </nav>
    );
};

export default Nav;