import React from 'react';
import pic1 from "../assets/undraw.jpg";
import "./index.css";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Videos = () => {
    return (
        <>
            <div className='Page'>
                <div className='pagetext'>
                    <h1 id="heading">Dive Into the Technology That Powers Your Favorite Platform</h1>
                    <p>Welcome to an exclusive glimpse into the world of Instagram, where technology meets creativity. From the moment you open the app, to the seamless way you navigate through feeds. If you're intrigued and want to delve deeper into the fascinating world of Instagram's technology, don't wait! Press the button below to watch and learn more. This is your chance to unlock the secrets of Instagram and see firsthand how every post, like, and story comes to life thanks to the innovative technologies behind the scenes. Let's embark on this journey of discovery together!</p>
                    <div id="buttons">
                        <Link to="/episode1" className="btn2">Watch the episode 1</Link>
                        <Link to="/episode2" className="btn2">Watch the episode 2</Link>
                    </div>
                </div>

                <div className='pageimage'>
                    <img src={pic1} alt="undraw" className="img" />
                </div>
            </div>
        </>
    );
};

export default Videos;
