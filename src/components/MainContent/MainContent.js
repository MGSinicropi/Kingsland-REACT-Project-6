import React from 'react';
import '../../App.css';
import { Button } from '../Buttons/Buttons';
// import './MainContent.css';
import './MainContent.css';

// rfce to start our main content page

function mainContent() {
    return (
        <div className='main-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted/>
            <h1 color='yellow'>I AM ONE MEDIA</h1>
            <p> Become Content Creators of the Future -- Now!</p>
            <div className='main-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>BECOME ONE</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WHO WE ARE</Button>
            </div>            
        </div>
    );
}

export default mainContent;
