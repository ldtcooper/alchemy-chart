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
      <div>
        <h3>Welcome to Alchemy Chart</h3>
        <p>Alchemy Chart is a free and open-source data visualization
           tool based off of Chartio that lets you
           turn your leaden data into golden insights
         </p>
        <p>Just enter a username and a password to get started</p>
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

  signupForm() {
    return(
      <div>
        <h3>Create an Account</h3>
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
              name="signup"
              onClick={this.handleSignup}>
              Sign Up!
            </button>
          </form>
      </div>
    );
  }

  render() {
    const blurb = this.welcomeBlurb();
    const signup = this.signupForm();
    const err = this.errorsShow();
    return(
      <div>
        {blurb}
        {signup}
        {err}
      </div>
    );
  }
}

export default Signup;
