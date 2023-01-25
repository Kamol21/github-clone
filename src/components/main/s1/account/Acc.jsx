import React from 'react';
import './acc.css';
import { useEffect, useState } from 'react';
import Api from '../../../api/Api';


const Acc = () => {
    const [repos, setrepos] = useState([]);
    useEffect(() => {
        Api.GetAvatar().then((res) => res.json()).then((data) => setrepos(data));
    }, [])
    return (
        <div className=''>
            <img className='avatar-img' src={repos.avatar_url} alt="avatar" />
            <h2 className='acc-name'>{repos.login}</h2>
            <a className='acc-btn' href="https://github.com/settings/profile">Edit Profile</a>
            <div>
                <a className='acc-follow' href={repos.followers_url}>{repos.followers} Followers  *</a>
                <a className='acc-follow' href={repos.following}> {repos.following} Following</a>
            </div>
        </div>
    );
};

export default Acc;