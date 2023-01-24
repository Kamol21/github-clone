import React, { useState } from 'react';
import './StatusModal.css'

const StatusModal = () => {
   const [modal, setModal] = useState('d-none');



   return (
      <div>
         <button className='profil-set-status'>
            Set status
         </button>
      </div>
   );
};

export default StatusModal;