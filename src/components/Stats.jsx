import React from 'react';

const Stats = () => {
    return (
        <section className='profile-stats-container'>
            <div className="profile-stat">
                <p id='name'>Repo</p>
                <p id='value'>9</p>
            </div>
            <div className="profile-stat">
                <p id='name'>Follower</p>
                <p id='value'>2000</p>
            </div>
            <div className="profile-stat">
                <p id='name'>Following</p>
                <p id='value'>9</p>
            </div>
        </section>
    );
}

export default Stats;