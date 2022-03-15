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
            <div
                className='searchbar'
                style={{ backgroundColor: mode ? "white" : "#1D2A47" }} >
                <img
                    src={Search}
                    alt=""
                />
                <input
                    type="search"
                    placeholder="Search Github username..."
                    onChange={prop.handleChange}
                    name="search"
                    value={prop.data.search}
                />
                <button
                    className="btn-search"
                    id="submit"
                    onClick={prop.getProfile}
                >Search</button>
                <div className='error'>
                    <p
                        className="no-results"
                        style={{ display: prop.data.message ? 'block' : 'none' }}
                    >No results</p>
                </div>
            </div>
        </header>);
}

export default Header;