import React, { useState } from 'react';
import './overview.css'
import { useEffect } from 'react';
import Api from '../../../api/Api';

const overview = () => {
   const [overviews, setOverviews] = useState([]);
   useEffect(() => {
      Api.GetAllPosts().then((res) => res.json()).then((data) => setOverviews(data));
   }, [])

   console.log(overviews);

   return (
      <div className='container-xxl'>
         <div className="main-overview-box">
         <div className='w-100 d-flex justify-content-between'>
            <h5 className='main-overview-info'>
               Popular repositories
            </h5>
            <h6 className='main-span-text'>Customize your pins</h6>
         </div>
         <ul className='list-unstyled w-100 py-3 d-flex flex-wrap justify-content-between'>
            {overviews.length > 0 ? overviews.map((overview) => {
               return <li className='overview-li mb-3'>
                  <div className='d-flex justify-content-between mb-4'>
                     <a href={overview.html_url} className='overview-name'>{overview.name}</a>
                     <span className='overview-visibility d-inline-block'>{overview.visibility}</span>
                  </div>
                  <span className='overview-lang'>{overview.language}</span>
               </li>
            }) : 'NOT FOUND'}
         </ul>
         </div>

      </div>
   );
};

export default overview;