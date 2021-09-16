import React,{ Component } from 'react';

import Particles from "react-tsparticles";

import './App.css';
import FirstBlog from './components/FirstBlog';


class App extends Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    console.log(main);

   
  }

  particlesLoaded(container) {
    console.log(container);
  }

render(){
    return (
      <>
    <div className="HomePage">
    <div className="WelcomePage">
      
     <h1 class="main_text">
       
       
       Welcome to my Blog!</h1>
       

    </div> 
    </div>
  
  <FirstBlog />
     
    


  
  
   
 </>
      
    );
  }
}

    
    
  

export default App;
