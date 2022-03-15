import React from 'react';
import Location from '../assets/icon-location.svg';
import Website from '../assets/icon-website.svg';
import Twitter from '../assets/icon-twitter.svg';
import Company from '../assets/icon-company.svg';

const Bottom = (prop) => {
    const data = prop.data
    return (
        <section className='profile__bottom-container'>
            <div className='bottom-block'>
                <div className='bottom-icon'>
                    <img src={Location} alt="" />
                </div>
                <p className='bottom-text'>{data.location}</p>
            </div>
            <div className='bottom-block'>
                <div className='bottom-icon'>
                    <img src={Website} alt="" />
                </div>
                <p className='bottom-text'>{data.blog}</p>
            </div>
            <div className='bottom-block'>
                <div className='bottom-icon'>
                    <img src={Twitter} alt="" />
                </div>
                <p className='bottom-text'>{data.twitter_username}</p>
            </div>
            <div className='bottom-block'>
                <div className='bottom-block'>
                    <img src={Company} alt="" />
                </div>
                <p className='bottom-text'>{data.company}</p>
            </div>


        </section>
    );
}

export default Bottom;