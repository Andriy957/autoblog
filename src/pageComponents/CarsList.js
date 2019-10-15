import React from 'react';
import Car from './Car';

class CarsList extends React.Component  {
    constructor() {
        super();
        this.state = {
           search: ""
        };
    }
    updateSearch(event) {
        this.setState({search:event.target.value.substr(0,100)})
    }
    
render(){
    let filterCars = this.props.attributeCarsList.filter(
        (contact) => {
            return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
        );
  return (
    <div>
      <input type="text" className="inp" placeholder="Пошук по назві авто (eng)" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
      {filterCars.map((argumentMap)=>{
       return <Car attributeCar={argumentMap}/>
      })}
    
    </div>
  );
 }
}

export default CarsList;