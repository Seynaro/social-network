import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
        <header className='header'>
            <img src='https://static6.depositphotos.com/1035649/553/v/450/depositphotos_5537406-stock-illustration-sign-friendship-love.jpg'></img>
        </header>
        <nav className='nav'>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
        <div className='content'>
            <div>
            <img src='https://kogdakotika.net/media/post_images/title_page_m_ChtRYfI.jpg'></img>
            </div>
            <div>
                <img src='https://k1news.ru/upload/iblock/189/18921e4b26b7a15bda1aaa7e69b8a2b3.jpg'></img>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>post 1</div>
                <div>post 2</div>
            </div>
        </div>
    </div>
  );
}

export default App;
