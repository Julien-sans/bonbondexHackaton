import React from 'react';
import '../style/Search.scss';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event) {
    const search = event.target.value.substr(0, 30)
    this.setState({ search: search })
    this.props.updateSearch(search)
  }

  render() {
    return (
      <div className="container" id="searchbar">
        <h2 className="text-center mt-5 mb-5">Ajoute ta dernière victime !</h2>
        <div
          className="form-inline active-cyan-3 active-cyan-4 mb-4 col-8 mx-auto"
        >
          <i
            className="fa fa-search"
            aria-hidden="true"
          />

          <input
            className="form-control form-control-sm ml-3 w-75 mx-auto"
            type="text"
            value={this.state.search}
            onChange={this.updateSearch}
            aria-label="Search"
          />
          </div>
      </div>
    );
  }
}

export default Searchbar;