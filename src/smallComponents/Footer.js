import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import '../App.css';

const history = createBrowserHistory();

class Footer extends React.Component {
  render(){ 
    return (
     
             <div className="footer">
                      <div className="links-footer">
                         <Link to="/"><span>Головна</span></Link>
                        <Link to="/about"><span>Про нас</span></Link>
                        <Link to="/contacts"><span>Контакти</span></Link>
                      </div>
                      <p>© 2019 Autoblog</p>
                   </div>
    
   )
  }
}

export default Footer;
