import React from 'react';
import Stats from './Stats';
import Info from './Info';
import Bottom from './Bottom';



const Main = () => {
    return (
        <main className='profile-container'>
            <div className="content">

                <Info />
                <p id='bio'>This profile has no bio</p>
                <Stats />
                <Bottom />

            </div>
        </main>
    )
}

export default Main;