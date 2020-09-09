import React from 'react';
//import logo from './logo.svg';
import img from './assets/img/Scarecrow.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
          <div className="header">
              <p>404 not found</p>
          </div>
          <div className="contents">
             <div className="contents-grid">
               <div className="contents-item">
                  <img src={img} className="App-logo" alt="logo" />
               </div>
               <div className="contents-item-text">
                 
                    <h4>I have bad news 
                    for you</h4>
                 
                    <p>The page you are looking 
                    for might be removed or is 
                    temporarily unavailable</p>
                  
                    <button>back to homepage</button>
               </div>
             
            
            </div>
          </div>
          <footer className="footer">
            <div className="credits">
                Thanawat @ DevChalenges.io
            </div>
              
          </footer>
      </div>
      
       
        
      
    </div>
  );
}

export default App;
