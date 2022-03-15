import React from 'react';
import Moon from '../assets/icon-moon.svg'
import Sun from '../assets/icon-sun.svg'
import Search from '../assets/icon-search.svg'

const Header = (prop) => {
    const mode = prop.data.mode


    return (

        <header>
            <section className='header'>
                <h1>devfinder</h1>
                <div className='mode-btn' onClick={prop.togglemode}>
                    <p> {mode ? 'DARK' : 'LIGHT'}</p>
                    <img src={mode ? Moon : Sun} alt="" />
                </div>
            </section>
            <div className='searchbar' style={{ backgroundColor: mode ? "white" : "#1D2A47" }} >
                <img src={Search} alt="" />
                <input type="search" name="user-input" placeholder="Search Github username..." />
                <button className="btn-search" id="submit">Search</button>
                <div className='error'>
                    <p className="no-results" style={{ display: true ? 'none' : 'block' }}>No results</p>
                </div>

            </div>
        </header>);
}

export default Header;