import React from 'react';

class SharePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shareWithId: undefined,
      errors: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  handleChange(event) {
    this.setState({shareWithId: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.shareWithId) {
      const sharedChart = {
        sharee_id: this.state.shareWithId,
        chart_id: this.props.match.params.id
      };
      this.props.shareChart(this.state.shareWithId, this.props.match.params.id);
      this.setState({errors: ['Success']});
    } else {
      this.setState({errors: ['You must select a user!']});
    }
  }

  allUsers() {
    return this.props.users.map( (el) => (
      <option key={el.id} value={el.id}>{el.username}</option>
    ));
  }

  errorShow() {
    return this.state.errors.map( (el, ind) => {
      return(<li key={ind}>{el}</li>);
    });
  }

  render() {
    const avaliableUsers = this.allUsers();
    const errors = this.errorShow();
    return(
      <div className='share-form'>
        <h2>Share Chart</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Share this chart with:
            <select onChange={this.handleChange}>
              <option>Select User</option>
              {avaliableUsers}
            </select>
          </label>
          <button type='submit'>Share!</button>
          <ul>
            {errors}
          </ul>
        </form>
      </div>
    );
  }
}

export default SharePage;
