import React from 'react';

class Signup {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
  }

  welcomeBlurb() {
    return(
      <div>
        <h3>Welcome to Alchemy Chart</h3>
        <p>Alchemy Chart is a free and open-source data visualization tool based off of Chartio that lets you turn your leaden data into golden insights</p>
      </div>
    );
  }

  render() {

  }
}
