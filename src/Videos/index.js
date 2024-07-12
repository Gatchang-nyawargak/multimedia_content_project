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
                    {/* <div id="buttons">
                        <Link to="/episode1" className="btn2">Watch the episode 1</Link>
                        <Link to="/episode2" className="btn2">Watch the episode 2</Link>
                    </div> */}
                </div>

                <div className='pageimage'>
                    <img src={pic1} alt="undraw" className="img" />
                </div>
            </div>
        <div className='videos'>
            <iframe width="843" height="400" src="https://www.loom.com/embed/9f83572d84e84fec9157f62dba7356a4?sid=0a89f4e2-2e9c-4133-9b28-7c724a9e738b" 
            frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <iframe width="845" height="400" src="https://www.loom.com/embed/a532427d2f194ba785b3cd09e5ea5b08?sid=c95349c9-815d-4001-918c-72d344c85b9f" 
            frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>

        </>
    );
};

export default Videos;
