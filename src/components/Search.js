import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

@inject('shop')
@observer
export default class Search extends Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    debugger;
    if (this.validateForm()) {
      this.props.history.push(`/search/${this.state.searchTerm}`);
    }
  }

  validateForm() {
    return this.state.searchTerm.length !== 0;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              id="searchTerm"
              className="input"
              type="searchTerm"
              placeholder="Search Here"
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
          </div>
          <div className="control">
            <Link className="button is-dark" to={`/search/${this.state.searchTerm}`} onClick={this.props.closeNav}>
              Search
            </Link>
          </div>
        </div>
      </form>
    );
  }
}
