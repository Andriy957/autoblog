import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import '../App.css';
import CarsList from "./CarsList.js";

let carsArray = [
{
    image:"./images/tesla.jpg",
    name: "Tesla",
    comment: <Link to="tesla#comm"><span>Коментарі</span></Link>,
    description: "Tesla Model S — п'ятидверний електромобіль виробництва американської компанії Tesla Motors.Автомобіль Tesla Model S вперше був представлений на Франкфуртському автосалоні в 2009 році, продажі в США почалися в червні 2012 року.",
    linkReadMore: <Link to="tesla"><span>Більше</span></Link>
}, 
{
    image:"./images/porsche.png",
    name: 'Porsche',
    comment: <Link to="porsche"><span>Коментарі</span></Link>,
    description: 'Porsche Taycan — електромобіль виробництва німецької компанії Porsche.Концепт-кар Porsche Mission E вперше був показаний на Міжнародному автосалоні у Франкфурті в 2015 році.Серійне виробництво планують почати у 2019 році.',
    linkReadMore: <Link to="porsche"><span>Більше</span></Link>
},
{
    image:"./images/jaguar.png",
    name: 'Jaguar',
    comment: <Link to="jaguar"><span>Коментарі</span></Link>,
    description: 'Jaguar I-Pace - електромобіль. Виготовляється компанією Jaguar з 2018 року.Створений у Великій Британії Jaguar I-Pace буде збиратися в австрійському Граці. Автомобіль приєднається до сімейства кросоверів Jaguar поряд з новим кросовером E-Pace і спортивним F-Pace.',
    linkReadMore: <Link to="jaguar"><span>Більше</span></Link>
},
{
    image:"./images/audi.jpg",
    name: 'Audi',
    comment: <Link to="audi"><span>Коментарі</span></Link>,
    description: 'Audi e-tron GT - концептуальний електромобіль німецького автовиробника Audi AG. Був представлений на автосалоні в Лос-Анджелесі в 2018 році. Автомобіль побудований на новій платформі PPE (Premium Platform Electric) разом з Porsche Taycan.',
    linkReadMore: <Link to="audi"><span>Більше</span></Link>
}
]

class Home extends React.Component {
  render(){ 
    return (
        <div className="all-post">
       <CarsList attributeCarsList={carsArray}/>
        </div>
   );
  }
}

export default Home;
export {carsArray};