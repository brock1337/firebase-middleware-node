import React, { Component } from 'react';
import TabListItem from './TabListItem';

class TabList extends Component {
  render () {
    return (
      <div className="tabs is-centered">
        <ul>
          <li className="is-active"><TabListItem title="Home" icon="fas fa-home" /></li>
          <li><TabListItem title="Logs" icon="fas fa-file-alt" /></li>
          <li><TabListItem title="Settings" icon="fas fa-cog" /></li>
        </ul>
      </div>
    );
  }
}

export default TabList;
