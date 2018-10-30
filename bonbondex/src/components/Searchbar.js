import React from 'react';

class Searchbar extends React.Component {
  render() {
    return (
      <div className="container">
        <div class="mt-5"></div>
        <form id="searchbar" className="form-inline active-cyan-3 active-cyan-4 mb-4 col-8 mx-auto">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input className="form-control form-control-sm ml-3 w-75 mx-auto" type="text" placeholder="Search" aria-label="Search" />
        </form>
      </div>

    );
  }
}

export default Searchbar;