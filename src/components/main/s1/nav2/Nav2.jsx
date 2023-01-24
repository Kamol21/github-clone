import React, { useState, useEffect } from 'react';
import './nav2.css'
import Api from '../../../api/Api'
import { Link } from 'react-router-dom';


const nav2 = () => {
   const [count, setCount] = useState(0)
   useEffect(() => {
      Api.GetAllPosts().then((res) => res.json()).then((data) => setCount(data.length));
   }, [])

   return (
      <div className="container-xxl mt-4">
         <div className='nav2-box'>
            <ul className='nav2-list list-unstyled'>
               <li>
                  <Link className='nav2-links' to="-1">
                     Overview
                  </Link>
               </li>
               <li>
                  <Link className='nav2-links d-flex align-items-center' to="/repos">
                     Repositories <span className='repo-count'>{count}</span>
                  </Link>
               </li>
               <li>
                  <a className='nav2-links' href="https://github.com/Kamol21?tab=projects">
                     Projects
                  </a>
               </li>
               <li>
                  <a className='nav2-links' href="https://github.com/Kamol21?tab=packages">
                     Packages
                  </a>
               </li>
               <li>
                  <a className='nav2-links' href="https://github.com/Kamol21?tab=stars">
                     Stars
                  </a>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default nav2;