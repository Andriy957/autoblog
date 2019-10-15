import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import '../App.css';
import About from "../pageComponents/About.js";
import Contacts from "../pageComponents/Contacts.js";
import LogIn from "./LogIn.js";

const history = createBrowserHistory();

class Header extends React.Component {
  render(){ 
    return (
            <div className="header">
                     <div className="logo">AutoBlog</div>
                     <div className="links-header">
                        <Link to="/"><span>Головна</span></Link>
                        <Link to="/about"><span>Про нас</span></Link>
                        <Link to="/contacts"><span>Контакти</span></Link>
                      </div>
                     <div className="LogIn">
                        <LogIn/>
                     </div>
              </div>      
   )
  }
}

export default Header;
