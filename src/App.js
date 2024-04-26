import React from 'react';
import Navbar2 from './Navbar2'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import nittanyzookeepers from './nittanyzookeepers.png'
import './zookeeper.css';
import Example from './Modal';



function App() {

  const appStyle = {
   backgroundColor: "green",
   minHeight: '100vh', 
    
  };

  return (
    <div className='App'>
    <div style={appStyle}>
    
      <Navbar2 />
      <Example/>
      
      
      <h1 style={{ textAlign: 'center', color: 'blue', fontWeight: 'bold'}}>Welcome to:</h1>
      
      <div className='zookeeper'>
      <img src={nittanyzookeepers} alt="react logo"/>
      </div>
      

    </div>
    </div>
  );
}


export default App;

