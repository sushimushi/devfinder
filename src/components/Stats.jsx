import React from 'react';

const Stats = (prop) => {
    const data = prop.data
    return (
        <section className='profile-stats-container' style={{ backgroundColor: prop.data.mode ? "white" : "#141D2F" }}>
            <div className="profile-stat">
                <p id='stat__title'>Repo</p>
                <p id='stat__value'>{data.public_repos}</p>
            </div>
            <div className="profile-stat">
                <p id='stat__title'>Follower</p>
                <p id='stat__value'>{data.followers}</p>
            </div>
            <div className="profile-stat">
                <p id='stat__title'>Following</p>
                <p id='stat__value'>{data.following}</p>
            </div>
        </section>
    );
}

export default Stats;