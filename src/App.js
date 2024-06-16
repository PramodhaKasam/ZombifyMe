import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './Home.js'
import Name from './Name.js'
import About from './about.js'
import './App.css';

function App() {
 

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/Name/:extra' element= {<Name/>}/>
            <Route path='/About' element= {<About/>}/>
        </Routes>

    </BrowserRouter>
    
     
  );
}

export default App;
