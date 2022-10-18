import Instructions from './components/Instructions/Instructions';
import Image from './components/Image/Image';
import Parameters from './components/Parameters/Parameters';
import Generate from './components/Generate/Generate';
import Preview from './components/Preview/Preview';
import './App.css';

function App() {
  return (
    
   <div>
    <Instructions/>
    <div className="threeColumn"> 
      <Image/>
      <Parameters/>
      <Preview/>
      <Generate/>
    </div>
    </div>  
    
  );
}

export default App;
