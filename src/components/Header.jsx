import React from 'react';
import Moon from '../assets/icon-moon.svg'
import Search from '../assets/icon-search.svg'

const Header = () => {

    const style = {
        display: true ? 'none' : 'block'
    }
    return (

        <header>
            <section className='header'>
                <h1>devfinder</h1>
                <div className='mode-btn'>
                    <p>DARK</p>
                    <img src={Moon} alt="" />
                </div>
            </section>
            <div className='searchbar'>
                <img src={Search} alt="" />
                <input type="search" name="user-input" placeholder="Search Github username..." />
                <button class="btn-search" id="submit">Search</button>
                <div className='error'>
                    <p className="no-results" style={style}>No results</p>
                </div>

            </div>
        </header>);
}

export default Header;