import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.login(this.state);
  }

  handleLogout(event) {
    this.props.logout();
  }

  greeting() {
    return (
      <div>
        <h5>Welcome, {this.props.currentUser.username}</h5>
        <button
          name="logout"
          onClick={this.handleLogout}>
          Log Out
        </button>
      </div>
    );
  }

  loginForm() {
    const errorsShow = this.errorsShow();
    return (
      <div>
        <form>
          <label>
            Username:
            <input type="text"
               name="username"
                value={this.state.username}
                onChange={this.handleChange}
                >
            </input>
          </label>

          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              >
            </input>
          </label>

          <button
            type='submit'
            name="login"
            onClick={this.handleLogin}>
            Log In!
          </button>
        </form>
        {errorsShow}
      </div>
    );
  }

  errorsShow() {
    const errorItems = this.props.errors.map( (el, i) => (<li key={i} >{el}</li>));
    return(
      <div>
        <ul>
          {errorItems}
        </ul>
      </div>
    );
  }

  render() {
    const rightSide = this.props.currentUser ? this.greeting() : this.loginForm();
    return(
      <header>
        <h1>AlchemyChart</h1>
        {rightSide}
      </header>
    );
  }

}

export default Header;
