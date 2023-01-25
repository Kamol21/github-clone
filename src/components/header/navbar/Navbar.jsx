import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <ul className='nav-list'>
                <li>
                    <a className='nav-links fw-bolder' href="https://github.com/pulls" target="_blank">Pull requests</a>
                </li>
                <li>
                    <a className='nav-links fw-bolder' href="https://github.com/issues" target="_blank">Issues</a>
                </li>
                <li>
                    <a className='nav-links fw-bolder' href="https://github.com/codespaces" target="_blank">Codespaces</a>
                </li>
                <li>
                    <a className='nav-links fw-bolder' href="https://github.com/marketplace" target="_blank">Marketplace</a>
                </li>
                <li>
                    <a className='nav-links fw-bolder' href="https://github.com/explore" target="_blank">Explore</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;