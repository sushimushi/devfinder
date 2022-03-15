import React from 'react';
import octocat from '../assets/octocat.png'


const Info = () => {
    return (
        <section className='profile-info-container'>
            <img id='avatar' src={octocat} alt="" />
            <div className='profile-info'>
                <div className="profile-name">
                    <h2 id='name'>The octocat</h2>
                    <p id='username'>@octocat</p>
                </div>
                <p id='date'>Joined 25 Jan 2011</p>
            </div>
        </section>
    );
}

export default Info;