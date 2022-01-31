import './App.css';
import {Login, SignUp} from './pages.js';
import { BrowserRouter as Switch, Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Mail  from "./components/Mail";
import EmailList from "./components/EmailList";



function App(){
return(
  <div>
    <Routes>
       <Route path="/" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}/>
      <div className="App">
      <Header/>

      <div className="app_body">
      <Sidebar/>
      
      <Switch>
       <Route path="/mail">
        <Mail/>
       </Route>

       <Route path="/">
        <EmailList/>
       </Route>
      </Switch>
      </div>
    </div>
    </Routes>
  </div>
); 

}
export default App;