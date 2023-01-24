import React, { useState } from 'react';
import './repo.css'
import { useEffect } from 'react';
import Api from '../../../api/Api';

const repo = () => {
   const [repos, setrepos] = useState([]);
   useEffect(() => {
      Api.GetAllPosts().then((res) => res.json()).then((data) => setrepos(data));
   }, [])

   console.log(repos);

   return (
      <div className='container-xxl'>
         <div className="main-repo-box">
         <ul className='list-unstyled w-100 py-3 d-flex flex-column justify-content-between'>
            {repos.length > 0 ? repos.map((repo) => {
               return <li className='repo-li'>
               <hr />
                  <div className='d-flex mb-4 px-2'>
                     <a href={repo.html_url} className='repo-name me-3 fw-bold'>{repo.name}</a>
                     <span className='repo-visibility d-inline-block'>{repo.visibility}</span>
                  </div>
                  <span className='repo-lang ps-2'>{repo.language}</span>
                  <span className='repo-lang mx-4'>Forks {repo.forks_count}</span>
                  <span className='repo-lang'>Updated on {repo.updated_at}</span>
               </li>
            }) : 'NOT FOUND'}
         </ul>
         </div>

      </div>
   );
};

export default repo;