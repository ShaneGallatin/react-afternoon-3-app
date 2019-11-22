import React from 'react';
import "./Reset.css";
import './App.css';
import Info from "./Info";
import Bottom from "./Bottom";

class App extends React.Component {
  constructor(){
    super();

    this.state = {
     
    }
  }

  render(){
    return(
      <div>

        <nav>
          <h2>Home</h2>
        </nav>

        <div className="black-box">

          <div>
            <Info />
          </div>
          
          
            
          

        </div>
        
        <Bottom/>
      </div>
     
    );
  }
}

export default App;
