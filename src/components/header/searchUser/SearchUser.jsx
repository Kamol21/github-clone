import React from 'react';
import './SearchUser.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';


const SearchUser = () => {
    const [className, setClassName] = useState(false);
    let toggleClass = '';
    let dNoneClass = ''
    if (className) {
        toggleClass = 'head-search-active';
        dNoneClass = 'd-none';
    }
    else {
        toggleClass = '';
        dNoneClass = '';
    }
    const [eTarget, seteTarget] = useState('');
    return (
        <form className={`${toggleClass} head-form`} action='#' autoComplete='off' onFocus={()=> setClassName(true)} onBlur={()=> setClassName(false)} onKeyUp={(e) => seteTarget(e.target.value.trim())}>
            <label className='head-search-label' htmlFor="search">
                <input className='head-search form-contro bg-transparent border-0 p-0' type="search" id="search" placeholder='Search or jump to...' />
                <span className={`head-search-custom-icon ${dNoneClass}`}>/</span>
            </label>
            <a href={`https://github.com/search?q=${eTarget}`} className={`${eTarget.length > 0 ? 'd-block' : 'd-none'} head-search-link`}>{eTarget}</a>
        </form>
    );
};
export default SearchUser;