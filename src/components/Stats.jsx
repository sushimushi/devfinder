import React from 'react';

const Stats = () => {
    return (
        <section className='profile-stats-container'>
            <div className="profile-stat">
                <p id='stat__title'>Repo</p>
                <p id='stat__value'>9</p>
            </div>
            <div className="profile-stat">
                <p id='stat__title'>Follower</p>
                <p id='stat__value'>2000</p>
            </div>
            <div className="profile-stat">
                <p id='stat__title'>Following</p>
                <p id='stat__value'>9</p>
            </div>
        </section>
    );
}

export default Stats;