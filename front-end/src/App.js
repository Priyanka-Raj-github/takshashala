import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import NavBar from './components/navbar/navBar';
import About from './components/About/about';
import Academics from './screen/Academics/academics';
import Error from './screen/Error/error';
import HomePage from './components/Homepage/homepage';
import Login from './components/Login/login';
import Registration from './screen/Registration/registration';
import Contact from './components/Contact/contact';
import Teacher from './components/Teacher/teacher';
import Principal from './components/Principal/principal';
import LoginUser from './components/RegisterLogin/LoginUser/LoginUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
          {/* <Route exact path="/homePage" element={<HomePage/>}/> */}
          <Route exact path="/homePage" element={<HomePage/>}/>
          <Route exact path="/about123" element={<About/>}/>
          <Route exact path="/academics2" element={<Academics/>}/>
          <Route exact path="/teachers" element={<Teacher/>}/>
          <Route exact path="/principal" element={<Principal/>}/>
          <Route exact path="/registration4" element={<LoginUser/>}/>
          <Route exact path="/login5" element={<Login/>}/>
          <Route exact path="/contact3" element={<Contact/>}/>
          <Route exact path="*" element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;