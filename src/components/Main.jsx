import React from 'react';
import Stats from './Stats';
import Info from './Info';
import Bottom from './Bottom';



const Main = (prop) => {
    const data = prop.data
    return (
        < main className='profile-container' style={{ backgroundColor: prop.data.mode ? "white" : "#1D2A47" }} >
            <div className="content">

                <Info data={data} />
                <p id='bio'>{data.bio ? data.bio : "This profile has no bio"}</p>
                <Stats data={data} />
                <Bottom data={data} />

            </div>
        </main >
    )
}

export default Main;