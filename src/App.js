import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import './App.css';
import Header from "./smallComponents/Header.js";
import Footer from "./smallComponents/Footer.js";
import Home from "./pageComponents/Home.js";
import About from "./pageComponents/About.js";
import Contacts from "./pageComponents/Contacts.js";
import Audi from "./pageComponents/Audi.js";
import Tesla from "./pageComponents/Tesla.js";
import Jaguar from "./pageComponents/Jaguar.js";
import Porsche from "./pageComponents/Porsche.js";
import {carsArray} from "./pageComponents/Home.js";


const history = createBrowserHistory();


class App extends React.Component {
  render(){ 
    return (
      <BrowserRouter history={history}> 
         <div className="wrapper">
          <div className="content">
           <Header/>
    
            <Switch>
              <Route exact path="/" component={Home} /> 
              <Route path="/about" component={About} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/audi" component={Audi} />
              <Route path="/tesla" component={Tesla} />
              <Route path="/jaguar" component={Jaguar} />
              <Route path="/porsche" component={Porsche} />
            </Switch>
        
           </div>
        
         <div className="footer"> 
           <Footer/>          
          </div>
        
       </div>
    </BrowserRouter>
   )
  }
}


export default App;





