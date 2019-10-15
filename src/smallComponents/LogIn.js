import React from "react";

class Modal extends React.Component {
  render() {
    return (
    
      <div className="modal">
        <form class="modal-content animate" action="/action_page.php" method="post">
        <div className="modal-overlay" onClick={this.props.close} />
        <div className="modal-content">
         <div className="modal-logIn">
          <input className="modal-logIn-name" type="text" placeholder="Введіть ваше ім'я"></input>
          <input className="modal-logIn-password" type="password" placeholder="Введіть пароль"></input>
          <button className="modal-logIn-submit" type="submit">Login</button>
        
        </div>
        </div>
        </form>
      </div>
     
    );
  }
};

class LogIn extends React.Component {
  state = {
    opened: false,
  };

  open = () => {
    this.setState({opened: true});
  };

  close = () => {
    this.setState({opened: false});
  };

  render() {
    return (
      <div>
        <button className="btnLogIn" onClick={this.open}>Увійти</button>
        {this.state.opened && <Modal close={this.close}></Modal>}
      </div>
    );
  }
}

export default LogIn;