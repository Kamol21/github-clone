import React from 'react';
import './ProfileDropdown.css';
import { useState } from 'react';

const Maindropdown = () => {
   const [drop, setDrop] = useState('d-none');


   



   return (
      <div className='profil-drop-box'>
         <button className='profil-dropdown-btn' onClick={() => setDrop(drop === 'd-none' ? 'd-flex' : 'd-none')}></button>
         <ul className={`${drop} profil-drop-list`}>
            <li className='profil-first-li'>
               <a className='profil-first-link' href="http://127.0.0.1:5173/">Signed in as Kamol21</a>
            </li>
            <li>
               <a className='profil-drop-links' href="https://github.com/new">
                  New repository
               </a>
            </li>
            <li>
               <a className='profil-drop-links' href="https://github.com/new/import">
                  Import repository
               </a>
            </li>
            <li>
               <a className='profil-drop-links' href="https://github.com/codespaces/new">
                  New codespace
               </a>
            </li>
            <li>
               <a className='profil-drop-links' href="https://gist.github.com/">
                  New gist
               </a>
            </li>
            <li>
               <a className='profil-drop-links' href="https://github.com/organizations/plan">
                  New organization
               </a>
            </li>
            <li>
               <a className='profil-drop-links' href="https://github.com/users/Kamol21/projects/1">
                  New Project
               </a>
            </li>
         </ul>
      </div>
   );
};

export default Maindropdown;