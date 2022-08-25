import React from 'react';
import "./Nav.css";

const Footer =() =>{
  var year = new Date().getFullYear();
 
  
  return(
    <div>
      <div className='footer'>
       <h3> KEEPER © {year}</h3>
      </div>
    </div>
  );
}
  export default Footer;