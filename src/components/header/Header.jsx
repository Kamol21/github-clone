import React from 'react';
import './header.css'
import githubIcon from '../../assets/github-icon.svg'
import SearchUser from './searchUser/SearchUser';
import Navbar from './navbar/Navbar';
import AddDropdown from './adddropdown/AddDropdown';
import Profiledropdown from './profiledropdown/Profiledropdown';

const Header = () => {
    return (
        <header>
            <div className="container-xxl py-1 px-4 d-flex align-items-center">
                <a href="https://github.com/" target="_blank">
                    <img src={githubIcon} alt="github icon" />
                </a>
                <SearchUser />
                <Navbar />
                <div className='head-dropdowns-box'>
                    <a href='https://github.com/notifications' className='head-notification-btn'></a>
                    <AddDropdown />
                    <Profiledropdown />
                </div>
            </div>
        </header>
    );
};

export default Header;