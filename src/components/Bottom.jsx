import React from 'react';
import Location from '../assets/icon-location.svg';
import Website from '../assets/icon-website.svg';
import Twitter from '../assets/icon-twitter.svg';
import Company from '../assets/icon-company.svg';

const Bottom = () => {
    return (
        <section className='profile__bottom'>
            <div className='links'>
                <img src={Location} alt="" />
                <p>San Fransisco</p>
            </div>
            <div className='links'>
                <img src={Website} alt="" />
                <p>https://github.blog</p>
            </div>
            <div className='links'>
                <img src={Twitter} alt="" />
                <p>Not available</p>
            </div>
            <div className='links'>
                <img src={Company} alt="" />
                <p>@github</p>
            </div>


        </section>
    );
}

export default Bottom;