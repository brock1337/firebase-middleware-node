import React, { Component } from 'react';

class TabListItem extends Component {
  render () {
    return (
      <a className="navbar-item">
        <span className="icon">
          <i className={ this.props.icon } />
        </span>
  
        { this.props.title }
      </a>
    );
  }
}

export default TabListItem;
