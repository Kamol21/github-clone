import React, { useState, useEffect } from 'react';
import './nav2.css'
import Api from '../../../api/Api'
import { Link } from 'react-router-dom';


const nav2 = () => {
   const [count, setCount] = useState(0)
   useEffect(() => {
      Api.GetAvatar().then((res) => res.json()).then((data) => setCount(data));
   }, [])

   return (
      <div className="container-xxl mt-4">
         <div className='nav2-box'>
            <ul className='nav2-list list-unstyled'>
               <li className='nav2-li'>
                  <Link className='nav2-links' to="/">
                  <i className="bi bi-book me-1"></i> Overview
                  </Link>
               </li>
               <li className='nav2-li'>
                  <Link className='nav2-links d-flex align-items-center' to="/repos">
                  <i className="bi bi-journal-bookmark-fill me-1"></i> Repositories <span className='repo-count'>{count.public_repos}</span>
                  </Link>
               </li>
               <li className='nav2-li'>
                  <a className='nav2-links' href="https://github.com/Kamol21?tab=projects">
                  <i className="bi bi-kanban-fill me-1"></i> Projects
                  </a>
               </li>
               <li className='nav2-li'>
                  <a className='nav2-links' href="https://github.com/Kamol21?tab=packages">
                  <i className="bi bi-box me-1"></i> Packages
                  </a>
               </li>
               <li className='nav2-li'>
                  <a className='nav2-links' href="https://github.com/Kamol21?tab=stars">
                  <i className="bi bi-star me-1"></i> Stars
                  </a>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default nav2;