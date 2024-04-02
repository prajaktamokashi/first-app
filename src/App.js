/*import './App.css';
import Mouseevent from './Components/Mouseevent';
import Userfrom from './Components/Userform';
import Form from './Components/Form';
//import Garage from './Components/Garage';
//import Promises from './Components/Promises';
//import Properties from './Components/Properties';
//import Table from './Components/Table';
//import Count1 from "./Components/Counter";
//import Header from "./Components/Const";
//import FavoriteColor from './Components/Usestatedemo';
//import Timer from './Components/Useeffectdemo';
//import Component1 from './Components/Usecontextdemo';
//import Reff from './Userefdemo';
//import Todos from './Components/Usereducerdemo';
//import Callback from './Components/Usecallbackdemo';
//import Httpmethods from './Components/Httpmethods';
import Login from './Components/Ifelsedemo';
//import Listkey from './Components/Listkey';
function App() {
  return (
    <div>
<Mouseevent/>
<hr/>
  <Login/>
   <hr/>
   <Userfrom/>,
   <hr />
   <Form/>
   </div>
  );
}
export default App;
// App.js
import "./App.css";
import React from "react";
import Home from "./Components/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Lipstick from "./Components/Lipstick";
import Haircare from "./Components/Haircare";
import Home1 from "./Components/Home1";
import Page1 from "./Components/page1";

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
    <>
      <Route  exact path="/" element={<Home/>} />
      <Route exact path="/lip" element={<Lipstick/>} />
      <Route exact path="/hair" element={<Haircare/>}/>
      <Route exact path="/home1" element={<Home1/>}/>
      <Route exact path="/page1" element={<Page1/>}/>

      </>
    </Routes>
    
   </BrowserRouter>
  );
};

export default App;*/
import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from './Components/Header';
import Home3 from './Components/Home3';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import  BookList from './Components/BookList';
import Booktwo from './Components/Booktwo';
import Bookone from './Components/Bookone';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home3/>} />
        <Route exact path="/about-us" element={<AboutUs/>} />
        <Route exact path="/contact-us" element={<ContactUs/>} />
        <Route exact path="/book" element={<BookList/>} />
          <Route path="/book/:id" element={<Bookone/>} />
          <Route path="/book/:id" element={<Booktwo/>} />

        </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
