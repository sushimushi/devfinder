import React from 'react';



const Info = (prop) => {
    const data = prop.data

    return (
        <section className='profile-info-container'>
            <img id='avatar' src={data.avatar_url} alt="" />
            <div className='profile-info'>
                <div className="profile-name">
                    <h2 id='name'>{data.name}</h2>
                    <p id='username'>@{data.login}</p>
                </div>
                <p id='date'>Joined {data.created_at}</p>
            </div>
        </section>
    );
}

export default Info;