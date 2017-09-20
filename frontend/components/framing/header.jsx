import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
    this.handleChange = this.handleChange.bind(this);
    this.greeting.bind(this);
    this.loginForm.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  greeting() {
    return (
      <div>
        <h5>Welcome, {this.props.currentUser.username}</h5>
        <button onClick={this.props.logout}>
          Log Out
        </button>
      </div>
    );
  }

  loginForm() {
    return (
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

        <button type='submit' onClick={this.props.login}>Log In!</button>
      </form>
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
