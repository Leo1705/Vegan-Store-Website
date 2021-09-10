import React,{ Component } from 'react';
import Sky from 'react-sky';

import './App.css';
import FirstBlog from './components/FirstBlog';

import ParticlesBg from 'particles-bg'
function App() {
  return (
    <>
      <Sky
          images={{
            
            0: "https://image.flaticon.com/icons/svg/174/174855.svg",
            1: "https://image.flaticon.com/icons/svg/174/174848.svg",
            2: "https://image.flaticon.com/icons/svg/174/174883.svg",
            3: "https://image.flaticon.com/icons/svg/174/174879.svg",
            4: "https://image.flaticon.com/icons/svg/174/174857.svg",
            5: "https://image.flaticon.com/icons/svg/174/174870.svg",
            6: "https://image.flaticon.com/icons/svg/174/174869.svg",
            7: "https://image.flaticon.com/icons/svg/174/174872.svg",
            8: "https://image.flaticon.com/icons/svg/174/174875.svg",
            9: "https://image.flaticon.com/icons/svg/174/174845.svg",
            10: "https://image.flaticon.com/icons/svg/174/174837.svg",
            11: "https://image.flaticon.com/icons/svg/174/174858.svg",
            12: "https://image.flaticon.com/icons/svg/174/174844.svg",
            13: "https://image.flaticon.com/icons/svg/174/174865.svg",
            14: "https://image.flaticon.com/icons/svg/174/174874.svg",
          15:  "https://image.flaticon.com/icons/svg/124/124574.svg",
        16: "https://image.flaticon.com/icons/svg/124/124570.svg",
        17: "https://image.flaticon.com/icons/svg/124/124567.svg",
        18: "https://image.flaticon.com/icons/svg/124/124560.svg",
        19: "https://image.flaticon.com/icons/svg/124/124559.svg",
        6: "https://image.flaticon.com/icons/svg/124/124558.svg",
        7: "https://image.flaticon.com/icons/svg/124/124588.svg",
        8: "https://image.flaticon.com/icons/svg/124/124542.svg",
        9: "https://image.flaticon.com/icons/svg/124/124569.svg",
        10: "https://image.flaticon.com/icons/svg/124/124573.svg",
        11: "https://image.flaticon.com/icons/svg/124/124586.svg",
        12: "https://image.flaticon.com/icons/svg/124/124548.svg",
        13: "https://image.flaticon.com/icons/svg/124/124555.svg",
        0: "https://svgshare.com/i/9T5.svg"
          }}
          how={100} 
          time={130} 
          size={'100px'} 
          background={'#34568B'} 
        />
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

export default App;
