import React from 'react';

class Signup extends React.Component{
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleSignup(event) {
    event.preventDefault();
    this.props.signup(this.state);
    this.setState({username: '', password: ''});
  }

  welcomeBlurb() {
    return(
      <div id="blurb" className="signup-box">
        <h3 className='signup-text'>Welcome to Alchemy Chart</h3>
        <p className='signup-text' >Alchemy Chart is a free and open-source data visualization
           tool based off of Chartio that lets you
           turn your leaden data into golden insights.
         </p>
        <p className='signup-text'>Just enter a username and a password to get started!</p>
      </div>
    );
  }

  errorsShow() {
    const errorItems = this.props.errors.map( (el, i) => (
      <li className='signup-text' key={i} >{el}</li>)
    );
    return(
      <div>
        <ul>
          {errorItems}
        </ul>
      </div>
    );
  }

  signupForm() {
    const err = this.errorsShow();
    return(
      <div id="signup-form" className="signup-box">
        <h4 className='signup-text'>Create an Account</h4>
          <form>
            <label className='signup-text'>
              Username:
            </label>
              <input type="text"
                 name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  >
              </input>
              <br/>
            <label className='signup-text'>
              Password:
            </label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                >
              </input>
              <br/>
            <button
              type='submit'
              name="signup"
              onClick={this.handleSignup}>
              Sign Up!
            </button>
          </form>
          {err}
      </div>
    );
  }

  render() {
    const blurb = this.welcomeBlurb();
    const signup = this.signupForm();
    return(
      <div id="signup-content">
        {blurb}
        {signup}
      </div>
    );
  }
}

export default Signup;
