import React, { useState } from 'react';
import './StatusModal.css'

const StatusModal = () => {
   const [modal, setModal] = useState('d-none');
   const [cause, setCause] = useState('');
   const finishstatus = ()=> {
      setModal('d-none');
      setCause('');
   }
   console.log(cause);

   return (
      <div className='head-modal'>
         <button className='profil-set-status' onClick={()=> setModal ('d-block')}>
            {cause.length > 0 ? cause : 'Set status'}
         </button>
         <div className={`${modal} head-modal-box1`}>
            <div className="head-title-btn-box">
               <h3 className='head-modal-title'>
                  Edit status
               </h3>
               <button className='head-btn-x' onClick={()=> setModal ('d-none')}>X</button>
            </div>
            <form className='head-modal-box2' action="#">
               <label className='head-modal-input' htmlFor="head-modal-input">
                  <input className='border-0 w-100 ps-3' type="text" id='head-modal-input' placeholder="What's happening?" defaultValue={cause} />
               </label>
               <div className="head-example-box">
                  Sugestions:
                  <div className="d-flex justify-content-between mt-2 me-1">
                     <div className='me-4'>
                        <button className='head-modal-btn1 bg-transparent border-0' onClick={()=> setCause ((cause.length > 0 && cause === 'Our vacation') ? '' : 'Our vacation')}>Our vacation</button>
                        <button className='head-modal-btn3 bg-transparent border-0' onClick={()=> setCause ((cause.length > 0 && cause === 'Out sick') ? '' : 'Out sick')}>Out sick</button>
                     </div>
                     <div className='ms-auto'>
                        <button className='head-modal-btn2 bg-transparent border-0' onClick={()=> setCause ((cause.length > 0 && cause === 'Working from home') ? '' : 'Working from home')}>Working from home</button>
                        <button className='head-modal-btn4 bg-transparent border-0' onClick={()=> setCause ((cause.length > 0 && cause === 'Focusing') ? '' : 'Focusing')}>Focusing</button>
                     </div>
                  </div>
               </div>
               <label className='head-modal-checkbox-label gap-1 mt-3 mb-1' htmlFor="head-modal-checkbox">
                  Busy
                  <input type="checkbox" id="head-modal-checkbox" onChange={()=> setCause (cause !== 'I may be slow to respond.' ? 'I may be slow to respond.' : '')}/>

               </label>
               <p className='head-modal-checkbox-info' id='head-modal-checkbox'>
                  When others mention you, assign you, or request your review, GitHub will let them know that you have limited availability.
               </p>
               <label className='head-modal-select-label gap-1' htmlFor="head-modal-select">
                  Clear status
                  <select className='head-modal-select' name="" id="head-modal-select">
                     <option selected value="Never">Never</option>
                     <option value="30">in 30 minutes</option>
                     <option value="1">in 1 hour</option>
                     <option value="4">in 4 hour</option>
                     <option value="today">today</option>
                     <option value="week">this week</option>
                  </select>
               </label>
               <div className="head-modal-btns">
                  <button className='head-modal-set' onClick={()=> setModal('d-none')}>Set status</button>
                  <button className='head-modal-clear' onClick={()=> finishstatus()}>Clear status</button>
               </div>
            </form>
         </div>

      </div>
   );
};

export default StatusModal;