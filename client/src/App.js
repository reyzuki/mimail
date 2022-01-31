mport {Routes, Route} from "react-router-dom";
import './App.css';
import {Login, SignUp} from './pages.js';
//import restaurant from './restaurant.jpg'


function App(){
return(
  <div>
    <Routes>
       <Route path="/" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}/>
    </Routes>
  </div>
); 

}
export default App;
