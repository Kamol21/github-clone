import React from 'react';
import './acc.css';
import { useEffect, useState } from 'react';
import Api from '../../../api/Api';


const Acc = () => {
    const [repos, setrepos] = useState([]);
    useEffect(() => {
        Api.GetAllPosts().then((res) => res.json()).then((data) => setrepos(data));
    }, [])
    return (
        <div>
            <img className='avatar-img' src={repos.avatar_url} alt="avatar" />
        </div>
    );
};

export default Acc;