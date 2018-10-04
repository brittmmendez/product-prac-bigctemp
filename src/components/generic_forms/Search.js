import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

@inject('shop')
@observer
class Search extends Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleEnter = (event) => {
    debugger;
    if (event.keyCode === 13) {
      debugger;
      const { form } = event.target;
      const index = Array.prototype.indexOf.call(form, event.target);
      debugger;
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    debugger;
    if (this.state.searchTerm.length !== 0) {
      const { history } = this.props;
      history.push(`/search/${this.state.searchTerm}`);
    }
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
            <button className="button is-dark" type="submit" onClick={this.props.closeNav}>
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(Search);
