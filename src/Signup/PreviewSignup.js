import React from 'react';
import {Link} from 'react-router-dom'

const PreviewSignup = () => {
  return <div className='login'>
            <h1>Welcome</h1>
           
     <div className='login-form'>
       <Link to ='/ChurchLogin'>
       <h3>
             Church
           </h3>
       </Link>
          <Link to = '/Login'>
          <h3>
             Artiste
           </h3>
          </Link>
        
     </div>
  </div>;
};

export default PreviewSignup;


