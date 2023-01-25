import React, { useState } from 'react';
import './repo.css'
import { useEffect } from 'react';
import Api from '../../../api/Api';

const repo = () => {
   const [repos, setrepos] = useState([]);
   useEffect(() => {
      Api.GetAllPosts().then((res) => res.json()).then((data) => setrepos(data));
   }, [])

   const [searchValue, setSearchValue] = useState('');

   const [classes, setClasses] = useState('d-none');
   const [checking, setChecking] = useState('All');
   let visb = 'visible';
   let visHidn = 'visually-hidden';

   const [classes2, setClasses2] = useState('d-none');
   const [checking2, setChecking2] = useState('All');

   const [classes3, setClasses3] = useState('d-none');
   const [checking3, setChecking3] = useState('All');

   const searched = repos.filter(searching => searching.name.includes(searchValue));

   console.log(searched);

   const [target, setTarget] = useState(false);


   return (
      <div className='w-100'>
         <div className="main-repo-box">
            <div className="main-repo-select-box">
               <form className='w-50' action="#" autoComplete='off'>
                  <input className='main-repo-search' type="search" placeholder='Find a repository...' onKeyUp={() => setTarget(true)} onKeyDown={(e) => setSearchValue(e.target.value.trim())}/>
               </form>

               <button className='repo-type-btn' onClick={() => setClasses(classes === 'd-none' ? 'd-block' : 'd-none')}>Type
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-caret-down-fill ms-2" viewBox="0 0 16 16">
                     <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
               </button>
               <ul className={`${classes} repo-types-list`}>
                  <li>
                     <button className='repo-btn-info' onClick={() => setChecking('All') }><i className={`${checking !== 'All' ? visHidn : visb} bi bi-check2`}></i>All</button>
                  </li>
                  <li>
                     <button className='repo-btn-info' onClick={() => setChecking('Public') }><i className={`${checking !== 'Public' ? visHidn : visb} bi bi-check2`}></i>Public</button>
                  </li>
                  <li>
                     <button className='repo-btn-info' onClick={() => setChecking('Private') }><i className={`${checking !== 'Private' ? visHidn : visb} bi bi-check2`}></i>Private</button>
                  </li>
                  <li>
                     <button className='repo-btn-info' onClick={() => setChecking('Sources') }><i className={`${checking !== 'Sources' ? visHidn : visb} bi bi-check2`}></i>Sources</button>
                  </li>
                  <li>
                     <button className='repo-btn-info' onClick={() => setChecking('Forks') }><i className={`${checking !== 'Forks' ? visHidn : visb} bi bi-check2`}></i>Forks</button>
                  </li>
                  <li>
                     <button className='repo-btn-info' onClick={() => setChecking('Archived') }><i className={`${checking !== 'Archived' ? visHidn : visb} bi bi-check2`}></i>Archived</button>
                  </li>
                  <li>
                     <button className='repo-btn-info' onClick={() => setChecking('Mirrors') }><i className={`${checking !== 'Mirrors' ? visHidn : visb} bi bi-check2`}></i>Mirrors</button>
                  </li>
                  <li>
                     <button className='repo-btn-info' onClick={() => setChecking('Templates') }><i className={`${checking !== 'Templates' ? visHidn : visb} bi bi-check2`}></i>Templates</button>
                  </li>
               </ul>


               <button className='repo-type-btn' onClick={() => setClasses2(classes2 === 'd-none' ? 'd-block' : 'd-none')}>Laguage
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-caret-down-fill ms-2" viewBox="0 0 16 16">
                     <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
               </button>
               <ul className={`${classes2} repo-types-list repo-lang-list`}>
                  <li>
                     <button className='repo-btn-info' onClick={() => setChecking2('All') }><i className={`${checking2 !== 'All' ? visHidn : visb} bi bi-check2`}></i>All</button>
                  </li>
                  <li>
                     <button className='repo-btn-info' onClick={() => setChecking2('Javascript') }><i className={`${checking2 !== 'Javascript' ? visHidn : visb} bi bi-check2`}></i>Javascript</button>
                  </li>
                  <li>
                     <button className='repo-btn-info' onClick={() => setChecking2('HTML') }><i className={`${checking2 !== 'HTML' ? visHidn : visb} bi bi-check2`}></i>HTML</button>
                  </li>
                  <li>
                     <button className='repo-btn-info' onClick={() => setChecking2('CSS') }><i className={`${checking2 !== 'CSS' ? visHidn : visb} bi bi-check2`}></i>CSS</button>
                  </li>
                  <li>
                     <button className='repo-btn-info' onClick={() => setChecking2('SCSS') }><i className={`${checking2 !== 'SCSS' ? visHidn : visb} bi bi-check2`}></i>SCSS</button>
                  </li>
               </ul>


               <button className='repo-type-btn' onClick={() => setClasses3(classes3 === 'd-none' ? 'd-block' : 'd-none')}>Sort
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-caret-down-fill ms-2" viewBox="0 0 16 16">
                     <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
               </button>
               <ul className={`${classes3} repo-types-list repo-sort-list`}>
                  <li>
                     <button className='repo-btn-info' onClick={() => setChecking3('Last updated') }><i className={`${checking3 !== 'Last updated' ? visHidn : visb} bi bi-check2`}></i>Last updated</button>
                  </li>
                  <li>
                     <button className='repo-btn-info' onClick={() => setChecking3('Name') }><i className={`${checking3 !== 'Name' ? visHidn : visb} bi bi-check2`}></i>Name</button>
                  </li>
                  <li>
                     <button className='repo-btn-info' onClick={() => setChecking3('Stars') }><i className={`${checking3 !== 'Stars' ? visHidn : visb} bi bi-check2`}></i>Stars</button>
                  </li>
               </ul>
            </div>




            <ul className='list-unstyled w-100 py-3 d-flex flex-column justify-content-between'>
            {searched.length > 0 ? searched.map((searchedRepo) => {
                  return <li className='repo-li'>
                     <hr />
                     <div className='d-flex mb-4 px-2'>
                        <a href={searchedRepo.html_url} className='repo-name me-3 fw-bold'>{searchedRepo.name}</a>
                        <span className='repo-visibility d-inline-block'>{searchedRepo.visibility}</span>
                     </div>
                     <span className='repo-lang ps-2'>{searchedRepo.language}</span>
                     <span className='repo-lang mx-4'>Forks {searchedRepo.forks_count}</span>
                     <span className='repo-lang'>Updated on {searchedRepo.updated_at}</span>
                  </li>
               }) : '' }
               {(repos.length > 0 && target !== true) ? repos.map((repo) => {
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
               }) : '' }
            </ul>
         </div>

      </div>
   );
};

export default repo;