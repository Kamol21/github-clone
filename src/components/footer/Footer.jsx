import React from 'react';
import './footer.css';
import github from '../../assets/github-black.svg';

const Footer = () => {
   return (
      <footer>
         <div className="container-xxl">
         <hr />
            <div className="foot">
               <div className="foot-info">
                  <a href="https://github.com/">
                     <img className='foot-git-icon' src={github} alt="github-icon-link" />
                  </a>
                  <span className='foot-year me-1'>{new Date().getFullYear()}</span>
                  <span className='foot-year'>Github, Inc</span>
               </div>
               <ul className='foot-list'>
                  <li>
                     <a className='foot-links' href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service">Terms</a>
                  </li>
                  <li>
                     <a className='foot-links' href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">Privacy</a>
                  </li>
                  <li>
                     <a className='foot-links' href="https://github.com/security">Security</a>
                  </li>
                  <li>
                     <a className='foot-links' href="https://www.githubstatus.com/">Status</a>
                  </li>
                  <li>
                     <a className='foot-links' href="https://docs.github.com/en">Docs</a>
                  </li>
                  <li>
                     <a className='foot-links' href="https://support.github.com/?tags=dotcom-footer">Contact Github</a>
                  </li>
                  <li>
                     <a className='foot-links' href="https://github.com/pricing">Pricins</a>
                  </li>
                  <li>
                     <a className='foot-links' href="https://docs.github.com/en">Api</a>
                  </li>
                  <li>
                     <a className='foot-links' href="https://github.com/services/">Training</a>
                  </li>
                  <li>
                     <a className='foot-links' href="https://github.blog/">Blog</a>
                  </li>
                  <li>
                     <a className='foot-links' href="https://github.com/about">About</a>
                  </li>
               </ul>
            </div>
         </div>
      </footer>
   );
};

export default Footer;