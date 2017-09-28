import React from 'react';

class SharePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shareWithId: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  handleChange(event) {
    this.setState({shareWithId: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const sharedChart = {
      sharee_id: this.sate.shareWithId,
      chart_id: this.props.match.params.id
    };
  }

  allUsers() {
    this.props.users.map( (el) => {
      return(<option key={el.id} value={el.id}>{el.username}</option>);
    });
  }

  render() {
    const avaliableUsers = this.allUsers();
    return(
      <div className='share-form'>
        <form onSubmit={this.handleSubmit}>
          <label>Share this chart with:
            <select onChange={this.handleChange}>
              <option disabled>Select User</option>
              {avaliableUsers}
            </select>
          </label>
          <button type='submit'>Share!</button>
        </form>
      </div>
    );
  }
}

export default SharePage;
