import React from 'react';

const Stats = (prop) => {
    const data = prop.data
    const color = { color: prop.data.mode ? "#2b3442" : "white" }

    return (
        <section className='profile-stats-container' style={{ backgroundColor: prop.data.mode ? "white" : "#141D2F" }}>
            <div className="profile-stat">
                <p id='stat__title'>Repo</p>
                <p id='stat__value' style={color}>{data.public_repos}</p>
            </div>
            <div className="profile-stat">
                <p id='stat__title'>Follower</p>
                <p id='stat__value' style={color}>{data.followers}</p>
            </div>
            <div className="profile-stat">
                <p id='stat__title'>Following</p>
                <p id='stat__value' style={color}>{data.following}</p>
            </div>
        </section>
    );
}

export default Stats;