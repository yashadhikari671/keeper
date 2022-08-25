import React from 'react';
import Nav from './Nav';
import Container from './Container';
import Footer from './footer';


const App =() =>{
  
  return(
    <div>
      <Nav />
      
      <Container style={{display: "inline-block"}}/>

      <Footer/>
      
    
    </div>
  );

}

export default App;