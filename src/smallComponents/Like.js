import React from 'react';
import '../App.css';


class Like extends React.Component  {
    state = {
       likes: localStorage.getItem('likes') | 0,
    }
 plus = () => {
  this.setState(({ likes }) => ({
      likes: likes + 1,
  }), () => localStorage.setItem('likes', this.state.likes));
}
render(){
  return (
    <div className="like">
      
      <button onClick={this.plus} className="like-button"> <img src="./images/like.png" /></button>{this.state.likes}
     
    </div>
  );
 }
}

export default Like;