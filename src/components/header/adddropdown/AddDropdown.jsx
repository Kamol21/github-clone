import React from 'react';
import './AddDropdown.css';
import { useState } from 'react';

const AddDropdown = () => {
    const [drop, setDrop] = useState('d-none');

    return (
        <div className='add-drop-box'>
            <button className='add-dropdown-btn' onClick={()=> setDrop(drop === 'd-none' ? 'd-flex' : 'd-none')}>+</button>
            <ul className={`${drop} add-drop-list`}>
                <li>
                    <a className='add-drop-links' href="https://github.com/new">
                        New repository
                    </a>
                </li>
                <li>
                    <a className='add-drop-links' href="https://github.com/new/import">
                        Import repository
                    </a>
                </li>
                <li>
                    <a className='add-drop-links' href="https://github.com/codespaces/new">
                        New codespace
                    </a>
                </li>
                <li>
                    <a className='add-drop-links' href="https://gist.github.com/">
                        New gist
                    </a>
                </li>
                <li>
                    <a className='add-drop-links' href="https://github.com/organizations/plan">
                        New organization
                    </a>
                </li>
                <li>
                    <a className='add-drop-links' href="https://github.com/users/Kamol21/projects/1">
                        New Project
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default AddDropdown;