import React from 'react';
import './ProfileDropdown.css';
import { useState, useEffect } from 'react';
import StatusModal from './statusModal/StatusModal';
import Api from '../../api/Api'


const Maindropdown = () => {
   const [drop, setDrop] = useState('d-none');
   const [repos, setrepos] = useState([]);
   useEffect(() => {
      Api.GetAvatar().then((res) => res.json()).then((data) => setrepos(data));
   }, [])


   return (
      <div className='profil-drop-box'>
         <button className='profil-dropdown-btn' onClick={() => setDrop(drop === 'd-none' ? 'd-flex' : 'd-none')}>
            <img className='profil-dropdown-btn-img' src={repos.avatar_url} alt="avatar-img" />
         </button>
         <div className={`${drop} profil-lists-box`}>
            <ul className="profil-drop-list">
               <li className='profil-first-li'>
                  <a className='profil-first-link' href="http://127.0.0.1:5173/">Signed in as <span className='fw-bold'>{repos.login}</span></a>
               </li>
               <li className='w-100 my-1'>
                  <StatusModal />
               </li>
               <li>
                  <a className='profil-drop-links' href="/">
                     Your profile
                  </a>
               </li>
               <li>
                  <a className='profil-drop-links' href="/repos">
                     Your repositories
                  </a>
               </li>
               <li>
                  <a className='profil-drop-links' href="https://github.com/Kamol21?tab=projects">
                     Your projects
                  </a>
               </li>
               <li>
                  <a className='profil-drop-links' href="https://github.com/Kamol21?tab=stars">
                     Your stars
                  </a>
               </li>
               <li>
                  <a className='profil-drop-links' href="https://gist.github.com/Kamol21">
                     Your gists
                  </a>
               </li>
               <li>
                  <a className='profil-drop-links' href="https://github.com/sponsors/accounts">
                     Your sponsors
                  </a>
               </li>
            </ul>
            <ul className="profil-drop-list mt-2">
               <li>
                  <a className='profil-drop-links' href="https://github.com/settings/billing/plans">
                     Upgrade
                  </a>
               </li>
               <li>
                  <a className='profil-drop-links' href="https://github.com/organizations/enterprise_plan?ref_cta=Try%2520Enterprise&ref_loc=user_drawer_side_panel&ref_page=Header+Avatar">
                     Try enterprise
                  </a>
               </li>
               <li>
                  <a className='profil-drop-links' href="https://github.com/organizations/enterprise_plan?ref_cta=Try%2520Enterprise&ref_loc=user_drawer_side_panel&ref_page=Header+Avatar">
                     Feature Preview
                  </a>
               </li>
               <li>
                  <a className='profil-drop-links' href="https://docs.github.com/en">
                     Help
                  </a>
               </li>
               <li>
                  <a className='profil-drop-links' href="https://github.com/settings/profile">
                     Settings
                  </a>
               </li>
               <li className='mt-2'>
                  <a className='profil-drop-links' href="https://github.com/">
                     Sign out
                  </a>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Maindropdown;