import React from 'react';
import '../App.css';
import Like from "../smallComponents/Like.js";


class Car extends React.Component  {

render(){
  return (
    <div className="post">
      <img src={this.props.attributeCar.image}/>
      <div className="name-car">{this.props.attributeCar.name}</div>  
      <div className="like"><Like/></div> 
      <button className="comment"><img src="./images/comment.png" />{this.props.attributeCar.comment}</button><br/>
      <div className="description">{this.props.attributeCar.description}</div><br/>
      <button className="readMore">{this.props.attributeCar.linkReadMore}</button>
    </div>
  );
 }
}

export default Car;

